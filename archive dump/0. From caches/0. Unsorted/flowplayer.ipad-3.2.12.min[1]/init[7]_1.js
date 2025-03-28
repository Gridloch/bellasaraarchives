SpilGames({
    name: 'wdg_game',
    waiton: 'game.info.loaded'
},  [
        'SWP',
        'SWPUtils',
        'SWPEvent',
        'JSLib',
        'GIBootstrap',
        'DOMSelect',
        'Cache',
        'GameEvents',
        'SpapiIntegration'
    ],
    function (SWP, Utils, SWPEvent, JSLib, Bootstrap, DOMSelect, Cache, GameEvents, SpapiIntegration) {

        SWP.init('game');

        /**
         * @todo Add validation of `integrationConfig`?
         */
        var integrationConfig = JSLib.get('current.game.integration.info'),
            prerollContainer = DOMSelect.get('#preroll-container'),
            rpgCacheUpdated = false,
            authenticated = (JSLib.get('spilgames.portal.user.authenticated') === "true") ? true : false,
            theGame = document.getElementById('theGame'),
            ZBresize = function(ratio, callback) {
                var defaultHeight = parseInt(integrationConfig.game.objectSettings.height,10),
                    defaultWidth = parseInt(integrationConfig.game.objectSettings.width,10),
                    newHeight = Math.floor((defaultHeight * ratio) / 100),
                    newWidth = Math.floor((defaultWidth * ratio) / 100),
                    swfObject = DOMSelect.get('#theGame object');

                if(swfObject) {
                    swfObject.setAttribute('height', newHeight.toString() + 'px');
                    swfObject.setAttribute('width', newWidth.toString() + 'px');
                }

                callback.call(this, newHeight, newWidth, ratio);
            },
            updateRpgCache = function(appInfo, callback) {
                var currentGame = appInfo,
                    maxItems = 10,
                    recentGames = [],
                    itemIsStored = false;
                Cache.getItem({key: 'recent.played.games'}, function(oldGames) {
                    if(oldGames && oldGames.length > 0)  {
                        recentGames = oldGames;
                        // this is to cleanup the old system
                        // which was using the appid string instead of an appinfo object
                        // this way if you have the old cache system, it will get purged and use objects instead
                        Utils.each(oldGames, function(oldGame) {
                            if("string" === typeof oldGame) {
                                recentGames = [currentGame];
                            }
                        });

                        itemIsStored = itemInRpgCache(recentGames, currentGame);

                        if(recentGames.length > maxItems-1){
                            recentGames.pop();
                            recentGames.unshift(currentGame);
                        }
                        else if(!itemIsStored){
                            recentGames.unshift(currentGame);
                        }

                    } else {
                        //no rpg cache yet, let's create it!
                        recentGames.push(appInfo);
                    }

                    if(!itemIsStored){
                        //update the cache
                        Cache.setItem({
                            key: 'recent.played.games',
                            value: recentGames,
                            expires: 315569259 //valid for 10 years
                        }, callback);
                    }
                });
            },
            itemInRpgCache = function(rpgObject, curGame){
                for(var i in rpgObject){
                    if (rpgObject[i].gid === curGame.gid){
                        return true;
                    }
                }
                return false;
            };

        // widget events
        SWP.Widget.init(function(widgetEvent) {
            switch(widgetEvent.name) {
                case "recent.played.games.update":
                    if(!rpgCacheUpdated) {
                        // Do NOT cast widgetEvent.data.appid as a INT, it won't fit (!) - always use as a string!
                        var gid = widgetEvent.data.appid+'';
                        var currentGameInfo = (integrationConfig && integrationConfig.game && integrationConfig.game.info) ?
                                                Utils.combine(integrationConfig.game.info, {gid: gid}) :
                                                {gid: gid};

                        updateRpgCache(currentGameInfo, function(done) {
                            rpgCacheUpdated = done;
                        });
                    }
                break;
            }
        });

        if(integrationConfig.game.spapiIntegration) {
            SpapiIntegration.enable(integrationConfig, SWP);
            SpilGames('api.auth.getApplicationToken', {
                applicationId: integrationConfig.portal.applicationId
            }, function (token) {
                if (integrationConfig.game.objectSettings.url.indexOf('?') === -1) {
                    integrationConfig.game.objectSettings.url += '?';
                }
                integrationConfig.game.objectSettings.url += 'appToken=' + token.appAuth.token;

                // Add origin to the iframe url, to be used in the API
                integrationConfig.game.objectSettings.url += '&o=' + location.protocol + '//' + location.hostname;

                Bootstrap.launch(integrationConfig);
            });
        } else {
            JSLib.messageBroker.addRule('api.portal.force.auth', function(data, callback) {
                SWP.System.init(function (systemEvent) {
                    if (systemEvent.name === "login.finished" || systemEvent.name == "registration.finished") {
                        JSLib('api.user.get', {cache: true}, function(res) {
                            var userState = (res && res.userInfo && res.userInfo.name !== "guest") ? "logged-in" : "logged-out";
                            callback({data: {state: userState}});
                        });
                    }
                });

                SWP.System.emit('popup.login.open', {force: true});

            }, JSLib.messageBroker.FIRST | JSLib.messageBroker.PROTECTED);
            // Game Integration - should work regardless of the environment
            Bootstrap.launch(integrationConfig);
        }

        // PORTAL SPECIFIC HOOKS

        // show the game side panel
        SWPEvent.listen('gi.show.panel', function() {
            SWP.System.emit('game.sidepanel.show');
        });

        //show the zoom bar
        SWPEvent.listen('gi.show.zoombar', function() {
            SWP.System.emit('game.zoom.show');
        });

        if (SpilGames.Events) {
            // Old api forced login
            SpilGames.Events.subscribe('portal.forceauthentication', function() {
                SWP.System.emit('popup.login.open');
            });
        }

        // game loaded
        SWPEvent.listen('gi.game.loaded', function() {

            // Fix for social games in FF
            if(/Firefox/.test(navigator.userAgent) && integrationConfig.game.detailedType && integrationConfig.game.detailedType.social) {
                window.setTimeout(function() {
                    //we cannot add a class because we cannot know what the size of the game is going to be
                    DOMSelect.get('#theGame #iframegame').style.height = (parseInt(integrationConfig.game.objectSettings.height) + 120).toString() + 'px';
                }, 1500); //we need a delay otherwise games like family barn will try to recalculate based on the iframe size
            }
            // update the recent played games cache
            SWP.Widget.emit('recent.played.games.update', {appid: integrationConfig.portal.applicationId});

            // listen for friend invite events
            if (SpilGames.Events) {
                SpilGames.Events.subscribe('invitefriends.request', function() {
                    //if user if not authenticated , then show login popup
                    if(!authenticated) {
                        SWP.System.emit('popup.register.open');
                    } else {
                        //else, show friend popup
                        SWP.System.emit('popup.social_invite.open');
                    }
                });
            }
        });

        // system events
        SWP.System.init(function (systemEvent) {
            switch(systemEvent.name) {
                case "game.zoom.in":
                    ZBresize(systemEvent.body.size, function(h, w, r) {
                        SWP.System.emit('game.area.increase', {ratio: r, game: {height: h, width: w}});
                    });
                break;
                case "game.zoom.out":
                    ZBresize(systemEvent.body.size, function(h, w, r) {
                        SWP.System.emit('game.area.decrease', {ratio: r, game: {height: h, width: w}});
                    });
                break;
                case "ad.preroll.finish":
                    if(prerollContainer) {
                        prerollContainer.style.height = 0;
                        prerollContainer.style.overflow = 'hidden';
                    }
                break;
                case "gi.game.show":
                    if(!Utils.hasClass(theGame, 'activeFeedbackScreen')) {
                        Utils.addClass(theGame, 'activeFeedbackScreen');
                    }
                break;
                case "gi.game.hide":
                    if(Utils.hasClass(theGame, 'activeFeedbackScreen')) {
                        Utils.removeClass(theGame, 'activeFeedbackScreen');
                    }
                break;
            }
        });

        //game events
        if(integrationConfig.game.achievements || integrationConfig.game.highscores) {
            GameEvents.init(integrationConfig.portal.vsn, function() {
                if(authenticated) {
                    GameEvents.on('UPDATE_HIGHSCORE', function(gameData) {
                        SWP.System.emit('game.update.highscore', gameData);
                    });
                    GameEvents.on('UPDATE_ACHIEVEMENT', function(gameData) {
                        SWP.System.emit('game.update.achievement', gameData);
                    });
                    GameEvents.on('UPDATE_GALLERY', function(gameData) {
                        SWP.System.emit('game.update.gallery', gameData);
                    });
                } else {
                    GameEvents.on('UPDATE_HIGHSCORE_FAILED', function(gameData) {
                        SWP.System.emit('game.update.highscore.failed', gameData);
                    });
                    GameEvents.on('UPDATE_ACHIEVEMENT_FAILED', function(gameData) {
                        SWP.System.emit('game.update.achievement.failed', gameData);
                    });
                    GameEvents.on('UPDATE_GALLERY_FAILED', function(gameData) {
                        SWP.System.emit('game.update.gallery.failed', gameData);
                    });
                }
            });
        }

        // hide the game if the payment screen is shown
        JSLib.subscribe('api.portal.overlay.*', function() {
            switch(this.event.cleanType) {
                case "api.portal.overlay.show":
                    if(Utils.hasClass(theGame, 'activeFeedbackScreen')) {
                        Utils.removeClass(theGame, 'activeFeedbackScreen');
                    }
                break;
                case "api.portal.overlay.hide":
                    if(!Utils.hasClass(theGame, 'activeFeedbackScreen')) {
                        Utils.addClass(theGame, 'activeFeedbackScreen');
                    }
                break;
            }
        });

        // refresh appToken when auth.changed event is fired
        JSLib.subscribe('api.event.auth.changed', function() {
            if(integrationConfig.portal.applicationId) {
                JSLib('api.auth.getApplicationToken', {applicationId: integrationConfig.portal.applicationId}, function() {});
            }
        });

        if(SpilGames.Events) {
            SpilGames.Events.subscribe('portal.adjustheight', function(data) {
                var isIframeGame = document.getElementById('iframegame');
                if(data && data.height && isIframeGame) {
                    isIframeGame.style.height = data.height + 'px';
                }
            });
        }
    }
);
