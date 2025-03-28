/*jslint devel: true, browser: true, nomen: true, maxerr: 50, indent: 4 */
/*global jQuery, $, Kinetic, _, Backbone, ZeroClipboard, Modernizr, iScroll*/

(function (global) {
    "use strict";

    /**
    * make sure that the mirrorpad and talk bubbles always have a nice 
    * rounded pixel size, to prevent faulty sub-pixel rendering.
    * Includes:
    *     mirrorpad: top, right, bottom, left edge slices
    *     talk bubbles: top, bottom and center slices.
    * @return {undefined}
    */
    function fixSubpixelIssues() {
        // undo any previously-applied manipulations by this function
        $('.quiz__mirrorpad, .mirrorpad__top, .mirrorpad__left, .mirrorpad__right, .mirrorpad__bottom, .talk-bubble__top, .talk-bubble__bottom, .talk-bubble')
            .css({
                width: '',
                height: '',
                top: '',
                bottom: ''
            });

        // round all the targeted elements' dimensions DOWN to the nearest pixel.
        // throttling this down so that we don't peg the CPU when resizing the browser.
        _.throttle((function () {
            $('.quiz__mirrorpad, .mirrorpad__top, .mirrorpad__left, .mirrorpad__right, .mirrorpad__bottom, .talk-bubble__top, .talk-bubble__bottom, .talk-bubble')
                .each(function () {
                    var $this = $(this);

                    $this.css({
                        width: Math.floor($this.outerWidth()),
                        height: Math.floor($this.outerHeight())
                    });
                });

            $('.mirrorpad__bottom').css({
                bottom: '',
                top: $('.mirrorpad__left').outerHeight() + $('.mirrorpad__top').outerHeight()
            });

            // reposition the left/right mirrorpad slices based on the new height
            // of the top mirrorpad slice.
            $('.mirrorpad__left, .mirrorpad__right')
                .each(function () {
                    $(this).css({
                        top: $('.mirrorpad__top').outerHeight()
                    });
                });

            // talk bubble top/bottom caps go outside the container, so their positioning
            // is slightly different, but it's the same idea.
            $('.talk-bubble__top').css('top', -(Math.floor($('.talk-bubble__top').outerHeight())));
            $('.talk-bubble__bottom').css('bottom', -(Math.floor($('.talk-bubble__bottom').outerHeight())));

        } ()), 500);
    }

    global.QUIZ = (function () {
        var quiz,
            dispatcher = _.extend(Backbone.Events, {

            }),
            globalSettings, // generated during QUIZ.init(). extends defaultSettings.
            defaultSettings = {
                // fraction of total questions that determine a neutral result. 
                // For an alliance to be determined (royal/rebel), an alliance 
                // must have N more questions chosen than the other alliance,
                // where N == neutralThresholdFraction * totalQuestions. Otherwise
                // the user is neutral.
                neutralThresholdFraction: 0.2,
                baseUrl: window.location.protocol + '//' + window.location.hostname + window.location.pathname,
                quizId: 'quiz1' // quiz id is used when logging actions.
            },
            questions = (function () {
                var ret = [];

                // generate random integer between min/max
                function getRandomArbitrary(min, max) {
                    return Math.round(Math.random() * (max - min) + min);
                }

                // only 10 questions for quiz, chosen from pool of 20+
                while (ret.length < 10) {
                    ret.push(window.questions.splice(getRandomArbitrary(0, window.questions.length - 1), 1)[0]);
                }

                return ret;
            } ()),
            results = window.results,
            translations = {
                startQuiz: global.translations.startQuiz || 'start quiz',
                send: global.translations.send || 'send',
                downloadPrint: global.translations.downloadPrint || 'download & print',
                resultScheduleTitleHour: global.translations.resultScheduleTitleHour || 'Hour',
                resultScheduleTitleClass: global.translations.resultScheduleTitleClass || 'Class',
                resultScheduleTitleTeacher: global.translations.resultScheduleTitleTeacher || 'Teacher'
            },
        // state object, changes as game changes.
            state = {
                currentQuestion: 0,
                activeViews: [],
                answers: {},
                modalClosedByUser: undefined, // used by SplashView
                modalEventsBound: false // used by SplashView, prevents modal events from being bound more than once.
            },
        /**
        * Deletes/unbinds events from all views, except for the active view.
        * The router adds any views it creates to the state.activeViews array. To guarantee these
        * views are destroyed properly (no extraneous event binding) this method is fired once a new
        * view is loaded.
        * @param  {Number} numToSave The number of most-recently-added views to save (not remove)
        * @return {[type]}           [description]
        */
            cleanViews = function (numToSave) {
                var view;

                numToSave = numToSave || 1;

                while (state.activeViews.length > numToSave) {
                    view = state.activeViews.shift();
                    view.remove();
                }
            },
        /**
        * Hides the entire quiz container. Used for the download/result pages, which
        * display just an image, similar to the vault page.
        * @param {String} itemsToHide Takes multiple arguments, which will hide various DOM elements.
        *                             Currently only accepts 'user-stats' and 'header'.
        * @return {undefined}
        */
            hideQuiz = function () {
                _.each(arguments, function (arg) {
                    switch (arg) {
                        case 'user-stats':
                            $('.user-stats').hide();
                            break;
                        case 'header':
                            $('.header-main').hide();
                            break;
                    }
                });
                $('#quiz').addClass('hide');
                $('#fullScreen').show();
            },
        /**
        * Shows the entire quiz container. Used when navigating away from the 
        * download/result pages.
        * @return {undefined}
        */
            showQuiz = function () {
                $('#quiz').removeClass('hide');
                $('.user-stats').show();
                $('.header-main').show();
                $('#fullScreen').hide();
            },
        /**
        * Adds a CSS class to the mirrorpad based on the supplied alliance.
        * Supports 'stylist','retail','waitress','study'
        * @param {String} alliance The alliance string you want to add.
        */
            setMirrorpadClass = function (alliance) {
                var alliances = [
					'retail',
                    'study',
					'stylist',
					'waitress'					
                ];

                _.each(alliances, function (allianceName) {
                    if (allianceName === alliance) {
                        $('.quiz__mirrorpad').addClass(allianceName);
                    } else {
                        $('.quiz__mirrorpad').removeClass(allianceName);
                    }
                });
            },
        /**
        * Updates the custom scrollbar or iScroll, depending on the platform.
        * @return {undefined}
        */
            updateScrollbar = function () {
                var $scrollbar,
                    $content,
                    $talkBubbleRight,
                    scrollbarWidth;

                if (Modernizr.touch) {
                    quiz.touchScroll.refresh();
                } else {
                    $scrollbar = $('.mirrorpad_screen__scrollbar');
                    $content = $('.mirrorpad_screen__content');
                    $talkBubbleRight = $('.talk-bubble.right');
                    scrollbarWidth = $scrollbar.outerWidth();

                    $('.mirrorpad_screen').tinyscrollbar_update();

                    // hide scrollbar and stretch out container if no scroll is needed
                    if ($('.mirrorpad_screen').outerHeight() >= $('.mirrorpad_screen .overview').outerHeight()) {
                        $scrollbar.css('display', 'none');
                        $content.css('width', '100%');
                        // add a css class to the screen determining if the scrollbar exists or not.
                        $('.mirrorpad_screen').addClass('noScrollbar');

                        // add scrollbar back in and reset width 
                    } else {
                        $('.mirrorpad_screen').removeClass('noScrollbar');
                        $scrollbar.css('display', 'block');
                        $content.css('width', '');
                    }
                }
            },
        // allows us to convert integer form values to alliance.
            allianceToNumber = {                               
				retail: 0,
				study: 1,
                stylist: 2,				
		        waitress: 3				
            },
        /**
        * Converts an alliance number to the alliance's string name.
        * 0 = retail, 1 = study, 2 = stylist, 3 = waitress.
        * @param  {Number} num Alliance number
        * @return {String} The alliance name.
        */

            allianceFromNumber = function (num) {
                var dir = [
					'retail',
					'study',
					'stylist',                    
					'waitress'					
                ];

                return dir[parseInt(num, 10)];
            },
			
            getAlliance = function () {
                function countPoints() {
                    var total = 0;
                    _.each(state.answers, function (answer) {
                        total = total + parseInt(answer.val, 10);
                    });
                    return total;
                }
				var ret = {}, 
				sumPoints = countPoints();
				
                ret.sumPoints = sumPoints;
                if (sumPoints <= 17 && sumPoints >= 10) {
				    ret.alliance = '2'; // stylist
                    ret.allianceName = 'stylist';
                    ret.allianceId = "stylist";
                } else if (sumPoints <= 24 && sumPoints >= 18) {				
                    ret.alliance = '0'; // retail
                    ret.allianceName = 'retail';
                    ret.allianceId = "retail";
                } else if (sumPoints <= 33 && sumPoints >= 25) {
                    ret.alliance = '3'; // waitress
                    ret.allianceName = 'waitress';
                    ret.allianceId = "waitress";
                } else if (sumPoints <= 40 && sumPoints >= 34) {					
                    ret.alliance = '1'; // study
                    ret.allianceName = 'study';
                    ret.allianceId = "study";
                }
                return ret;
            },
        /**
        * Gets the alliance (using getAlliance), then returns the result view data
        * related to that alliance.
        * @return {Object} Context data for the result view, based on alliance.
        */
            getResultData = function () {
                return _.find(results, {Alliance: parseInt(getAlliance().alliance, 10)});
            },
        /**
        * Base screen view
        * @class Base class for most of the mirrorpad quiz screens.
        */
            ScreenView = Backbone.View.extend({
                render: function (settings) {
                    var context = this.getContext(settings);

                    this.$el.html(this.template(context));
                    this.transitions.fadeIn.call(this);
                    $('.mirrorpad_screen__content .overview').html(this.$el);

                    this.manageButton(settings);
                    updateScrollbar();
                    cleanViews();
                },
                getContext: function (settings) {
                    var context = this.model !== undefined ? this.model.attributes : {};
                    return settings.context || context;
                },
                transitions: {
                    fadeOut: function () {
                        $('.mirrorpad_screen__content')
                            .removeClass('fadeIn')
                            .addClass('fadeOut');
                    },
                    fadeIn: function () {
                        $('.mirrorpad_screen__content')
                            .removeClass('fadeOut')
                            .addClass('fadeIn');
                    }
                },
                // helper to manage the mirrorpad button
                manageButton: function (settings) {
                    var $button = $('.quiz__mirrorpad').find('.mirrorpad-button');

                    function updateButtonText(text) {
                        $button.html(text);
                    }

                    function hideButton() {
                        $button.addClass('hide');
                    }

                    function showButton() {
                        $button.removeClass('hide');
                    }

                    function makeButtonSparkle() {
                        $button.addClass('sparkle');
                    }

                    function makeButtonNotSparkle() {
                        $button.removeClass('sparkle');
                    }

                    if (settings) {
                        switch (settings.hideButton) {
                            case true:
                                hideButton();
                                break;
                            case false:
                                showButton();
                                break;
                        }

                        if (settings.buttonText) {
                            updateButtonText(settings.buttonText);
                        }

                        if (settings.buttonSparkle === true) {
                            makeButtonSparkle();
                        } else {
                            makeButtonNotSparkle();
                        }
                    }
                }
            }),
            QuestionView = ScreenView.extend({
                className: 'screen--question',
                template: _.template($('#templateQuestion').html()),
                events: {
                    'mousedown input': 'chooseAnswer',
                    'touchstart input': 'chooseAnswer',
                    'mousedown .radio-button': 'chooseAnswer',
                    'touchstart .radio-button': 'chooseAnswer',
                    'mousedown label': 'chooseAnswer',
                    'touchstart label': 'chooseAnswer'
                },
                initialize: function () {
                    var desiredQuestion = parseInt(state.currentQuestion, 10) + 1,
                        self = this;
                    dispatcher.off('mirrorpadButtonClicked');
                    dispatcher.on('mirrorpadButtonClicked', function () {
                        if (self.answerChosen === true || state.answers['question-' + state.currentQuestion] !== undefined) {
                            quiz.router.navigate('question/' + desiredQuestion, { trigger: true });
                        } else {
                            console.log('must choose an answer before moving to the next question.');
                        }
                    });
                },
                render: function (settings) {
                    var self = this,
                        context = this.getContext(settings),
                        $container = $('.mirrorpad_screen__content .overview');

                    context.questionCount = (state.currentQuestion + 1) + ' / ' + questions.length;

                    this.transitions.fadeIn.call(this);

                    // prep new question markup
                    this.$el.html(this.template(context));

                    this.$el
                        .find('.answer')
                        .css('opacity', 0);

                    // animate out any talk bubbles currently on the screen
                    $container
                        .find('.talk-bubble')
                        .removeClass('fadeInUp')
                        .addClass('fadeOutUp');

                    // add in proxy-radio buttons (custom-styled)
                    self.$el
                        .find('input[type="radio"]')
                        .hide()
                        .before('<div class="radio-button"></div>');

                    // check if question has already been answered and mark that input as clicked.
                    if (state.answers['question-' + state.currentQuestion]) {
                        this.updateRadioButtons(self.$el.find('input[data-id=' + state.answers['question-' + state.currentQuestion].inputId + ']').siblings('.radio-button'));
                    }

                    // fade in new questions, after old ones fade out
                    _.delay(function () {
                        $container.html(self.$el);

                        // top/bottom caps of talk bubbles cannot be rendered in pixel 
                        // fractions, because sub-pixel rendering sometimes causes lines to
                        // appear in between the caps.                        
                        fixSubpixelIssues();

                        self.$el
                            .find('.question')
                            .addClass('fadeInUp');

                        _.delay(function () {
                            self.$el
                                .find('.answer')
                                .css('opacity', '')
                                .addClass('fadeInUp');

                            updateScrollbar();
                            cleanViews();
                        }, 500);

                    }, 1000);

                    this.manageButton(settings);
                },
                chooseAnswer: function (e) {
                    var $target = $(e.target),
                        $radioButton = $target.siblings('input');

                    this.updateRadioButtons($target);

                    e.stopPropagation(); // iScroll form field fix                    
                    state.answers['question-' + state.currentQuestion] = {
                        val: $radioButton.val(),
                        inputId: $radioButton.attr('data-id')
                    };

                    this.answerChosen = true;
                },
                updateRadioButtons: function ($target) {
                    this.$el
                        .find('.radio-button')
                        .removeClass('clicked');

                    $target
                        .parent()
                        .find('.radio-button')
                        .addClass('clicked');
                }
            }),

            IntroView = ScreenView.extend({
                className: 'screen--intro',
                template: _.template($('#templateIntro').html()),
                initialize: function () {
                    dispatcher.off('mirrorpadButtonClicked');
                    dispatcher.once('mirrorpadButtonClicked', function () {
                        //tealium tracking
                        global.MAT.analytics.whenTealiumIsReady(function () {
                            global.utag.track("view", { event_id: "AfterschoolJob Quiz: Start", event_category_id: "Links" });
                        });

                        quiz.router.navigate('question/0', { trigger: true });

                    });
                },
                render: function (settings) {
                    var self = this,
                        context = this.getContext(settings);

                    // fade out current content
                    this.transitions.fadeOut.call(this);

                    // fade in new content
                    _.delay(function () {
                        self.$el.html(self.template(context));
                        fixSubpixelIssues();
                        $('.mirrorpad_screen__content .overview').html(self.$el);
                        self.manageButton(settings);
                        self.transitions.fadeIn.call(self);
                        updateScrollbar();
                        cleanViews();
                    }, 1000);
                }
            }),
            ResultView = ScreenView.extend({
                className: 'screen-ftQuiz--result',
                template: _.template($('#templateResult').html()),
                render: function (settings) {
                    var self = this,
                        context = this.getContext(settings);



                    // change mirrorpad appearance
                    self.$el.addClass(context.allianceName);

                    // fade out current content
                    this.transitions.fadeOut.call(this);

                    //change heading text and background
                    $('#resultHeading').show();
                    $('#defaultHeading').hide();
                    $('#fullScreen').addClass('resultsPage');					
                    // fade in new content
                    _.delay(function () {
                        self.$el.html(self.template(context));
                        $('.mirrorpad_screen__content .overview').html(self.$el);
                        self.manageButton(settings);
                        self.transitions.fadeIn.call(self);
                        //self.initParticleEffects();
                        updateScrollbar();
                        cleanViews(3);
                        if ($('.imageFrame img').length > 0) {
                            var tmpImg = new Image() ;
                            tmpImg.src = $('.imageFrame img').attr('src');
                            tmpImg.onload = function() {
                                updateScrollbar();  
                            }; 
                        }
                    }, 1000);

                    // events
                    dispatcher.off('mirrorpadButtonClicked');
                    dispatcher.on('mirrorpadButtonClicked', function () {
                        // tealium tracking
                        global.MAT.analytics.whenTealiumIsReady(function () {
                            global.utag.track("view", { event_id: "AfterschoolJob Quiz: Print Result", event_category_id: "Downloads" });
                        });

                        // open pdf in new window
                        window.open(context.Schedule.SchedulePrintableUrl);
                    });
                },
                initParticleEffects: function () {
                    var p = new global.SITE.ui.ParticleEffects({
                        stageX: 0,
                        stageY: 0,
                        stageWidth: $('.sparkle').outerWidth() + 50,
                        stageHeight: $('.sparkle').outerHeight() + 50,
                        gravity: 0,
                        container: '.sparkle'
                    });

                    // generate random integer between min/max
                    function getRandomArbitrary(min, max) {
                        return Math.round(Math.random() * (max - min) + min);
                    }

                    p.getParticleStartPosition = function () {
                        return [getRandomArbitrary(0, this.options.stageWidth), getRandomArbitrary(this.options.stageHeight / 1.5, this.options.stageHeight / 2.5)];
                    };

                    p.duringLoop = function () {
                        var self = this,
                            i = 0,
                            len = self.particles.length,
                            particles = self.particles;

                        for (i; i < len; i += 1) {
                            particles[i].loop();
                        }
                    };

                    p.init();
                }
            }),
            AllianceMeterView = ScreenView.extend({
                template: _.template($('#templateResultAllianceMeter').html()),
                render: function (settings) {
                    var context = this.getContext(settings);

                    this.$el
                        .html(this.template(context))
                        .find('.alliance-meter')
                        .addClass('fadeIn');

                    $('.quiz__top').html(this.$el);
                }
            }),
            ShareCTAView = ScreenView.extend({
                className: 'share-cta-container',
                template: _.template($('#templateResultShare').html()),
                render: function (settings) {
                    var self = this,
                        context = this.getContext(settings),
                        clip;

                    this.$el.html(this.template(context));

                    this.$el
                        .html(this.template(context))
                        .find('.share-schedule')
                        .addClass('slideInUp');

                    _.delay(function () {
                        self.$el
                            .find('.arrow')
                            .removeClass('hide')
                            .addClass('slideInLeft');
                    }, 1000);

                    $('.quiz__bottom').html(this.$el);

                    // have flash?
                    if (Modernizr.touch === false) {
                        clip = new ZeroClipboard(self.$el.find('.share-copy'), {
                            moviePath: "/Static/vendor/zeroclipboard/ZeroClipboard.swf",
                            hoverClass: 'hover'
                        });
						clip.on( "complete", function(client, args) {
                            // tealium tracking
							global.MAT.analytics.whenTealiumIsReady(function () {					
								global.utag.track("view", { event_id:"AfterschoolJob Quiz: Share Result", event_category_id:"Social" });
							});
                        });
                    } else {
                        // no flash, remove copy button.
                        self.$el
                            .find('.share-schedule')
                            .addClass('no-flash');
                    }

                    this.manageButton(settings);
                }
            }),

        // The very first view: the splash screen
            SplashView = Backbone.View.extend({
                className: 'fullScreen--splash',
                template: _.template($('#templateSplash').html()),
                events: {
                    'click button.start': 'start'
                },
                render: function (settings) {
                    this.$el.html(this.template(settings.context));
                    $('#fullScreen').html(this.$el);
                    this.checkIfLoggedIn();
                },
                start: function () {
                    quiz.router.navigate('intro', { trigger: true });
                },
                checkIfLoggedIn: function () {
                    var self = this;

                    function displayModal() {
                        var modalControls;

                        modalControls = self.$loginModal.modal({
                            overlayId: 'quiz-modal-overlay'
                        });

                        if (state.modalEventsBound === false) {
                            console.log('binding!');
                            self.$loginModal.on('click', 'button', function () {
                                modalControls.close();
                                state.modalClosedByUser = true;
                            });

                            // activate janrain login modal
                            self.$loginModal.on('click', '#loginModalLogin', function () {
                                global.janrain.capture.ui.modal.open();
                            });

                            state.modalEventsBound = true;
                        }
                    }

                    if (!global.USER_LOGGED_IN && !state.modalClosedByUser) {
                        if (!global.SITE.ui.state.isPageRevealed) {
                            $(window).on('revealPage', function () {
                                displayModal();
                            });
                        } else {
                            displayModal();
                        }
                    }
                },
                $loginModal: (function () {
                    var template = _.template($('#templateLoginModal').html()),
                        context = {
                            loginModalTitle: global.translations.loginModalTitle,
                            loginModalDescription: global.translations.loginModalDescription,
                            loginModalButtonPlayAsGuest: global.translations.loginModalButtonPlayAsGuest,
                            loginModalButtonLogin: global.translations.loginModalButtonLogin
                        },
                        modalMarkup = template(context),
                        $modal = $('<div class="modal" id="loginModal"></div>');

                    $modal.append(modalMarkup);

                    return $modal;
                } ())
            }),
            ShareView = Backbone.View.extend({
                className: 'fullScreen--share',
                template: _.template($('#templateShare').html()),
                events: {
                    'click .back-to-quiz': 'startQuiz'
                },
                startQuiz: function () {
                    quiz.router.navigate('welcome', { trigger: true });
                },
                render: function (settings) {
                    this.$el.html(this.template(settings.context));
                    $('#fullScreen').html(this.$el);
                }
            });

        quiz = {
            questions: (function () {
                var ret = new Backbone.Collection();
                ret.reset(questions);
                return ret;
            } ()),
            Router: Backbone.Router.extend({
                routes: {
                    'question/:id': 'question',
                    '': 'index',
                    'welcome': 'splash',
                    'intro': 'intro',
                    'result': 'result',
                    'share/:allianceName': 'share'
                },
                index: function () {
                    showQuiz();
                    quiz.router.navigate('welcome', { trigger: true });
                    cleanViews();
                },
                question: function (id) {
                    var activeView;

                    if (quiz.questions.at(id) === undefined) {
                        quiz.router.navigate('result', { trigger: true });
                        return;
                    }

                    showQuiz();
                    state.currentQuestion = parseInt(id, 10);

                    activeView = new QuestionView({
                        model: quiz.questions.at(id)
                    });

                    activeView.render({
                        buttonText: translations.send,
                        hideButton: false
                    });

                    state.activeViews.push(activeView);
                },
                splash: function () {
                    var activeView = new SplashView();

                    showQuiz();
                    hideQuiz();

                    activeView.render({
                        hideButton: true
                    });

                    state.activeViews.push(activeView);
                    cleanViews();
                },
                intro: function () {
                    var activeView = new IntroView();

                    showQuiz();

                    activeView.render({
                        hideButton: false,
                        buttonText: translations.startQuiz
                    });

                    state.activeViews.push(activeView);
                },
                result: function () {
                    var resultView = new ResultView(),
                        allianceMeterView = new AllianceMeterView(),
                        shareCTAView = new ShareCTAView(),
                        context = getResultData(),
                        allianceName = allianceFromNumber(context.Alliance);
						// tealium tracking
						global.MAT.analytics.whenTealiumIsReady(function () {						
							global.utag.track("view", { event_id: "AfterschoolJob Quiz: Complete [" + allianceName + "]", event_category_id: "Links" });
						});

                    _.extend(context, {
                        resultScheduleTitleHour: translations.resultScheduleTitleHour,
                        resultScheduleTitleClass: translations.resultScheduleTitleClass,
                        resultScheduleTitleTeacher: translations.resultScheduleTitleTeacher,
                        allianceName: allianceName,
                        resultPageUrl: globalSettings.baseUrl + '#share/' + allianceName
                    });

                    showQuiz(true);
                    setMirrorpadClass(allianceName);

                    resultView.render({
                        context: context,
                        hideButton: true,
                        buttonText: translations.downloadPrint,
                        buttonSparkle: false
                    });

                    allianceMeterView.render({
                        context: context
                    });

                    shareCTAView.render({
                        context: context
                    });

                    state.activeViews = state.activeViews.concat([resultView, allianceMeterView, shareCTAView]);
                },
                share: function (allianceName) {
					// tealium tracking
					global.MAT.analytics.whenTealiumIsReady(function () {					
						global.utag.track("view", { event_id:"AfterschoolJob Quiz: Share Result", event_category_id:"Social" });
					});
                    var result = _.find(results, { Alliance: parseInt(allianceToNumber[allianceName], 10) }),
                        activeView;

                    // go back to the main splash screen if no result exists.
                    if (result === undefined) {
                        quiz.router.navigate('welcome', { trigger: true });
                        return;
                    }

                    // hide the quiz and a few other things
                    hideQuiz('user-stats', 'header');
					
					// Remove Results class
					$('.resultsPage').removeClass('resultsPage');
					
                    activeView = new ShareView();
                    activeView.render({ context: result });

                    state.activeViews.push(activeView);
                    cleanViews();
                }
            })
        };

        // public API
        return {
            init: function (customSettings) {

                // private var defined in top context
                globalSettings = _.extend(defaultSettings, customSettings);

                // global mirrorpad button interaction event
                $('.mirrorpad-button').on('click', function () {
                    dispatcher.trigger('mirrorpadButtonClicked');
                });

                // iScroll for touch devices, fancy scrollbar for desktops.
                if (Modernizr.touch) {
                    // firefox on android throws all types of rendering issues with iscroll
                    if (Modernizr.isgecko === false) {

                        $('.mirrorpad_screen')
                            .find('.scrollbar')
                            .remove();

                        quiz.touchScroll = new iScroll($('.mirrorpad_screen__content')[0], {
                            hScroll: false
                        });

                        global.SITE.ui.$window.on('resize', function () {
                            quiz.touchScroll.refresh();
                        });
                    }

                    // orientation events: TODO: this _may_ help rendering issues in iOS.
                    window.onorientationchange = function () {
                        fixSubpixelIssues();
                    };
                } else {
                    $('.mirrorpad_screen').tinyscrollbar({
                        sizethumb: 105
                    });
                }

                $(window).on('resize', fixSubpixelIssues);

                // kick off the sub-pixel rendering fixes at startup.
                $(document).ready(function () {
                    fixSubpixelIssues();
                });

                // start app
                quiz.router = new quiz.Router();

                // Can't enable pushState yet - root param would be required, but 
                // Mattel has asked for multiple quizzes so this cannot be hard coded.
                // Additionally the SHARE links are part of the backbone app and if 
                // those are returned without a #, the server will throw a 404.
                Backbone.history.start({
                    // pushState: true,  
                    // root: window.location.pathname  // could potentially use ROUTE global to replace 'quiz'
                });
            }
        };

    } ());
} (this));
