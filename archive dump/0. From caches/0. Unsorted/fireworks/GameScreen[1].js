/**
 * Created by AnthonyKen on 12/5/13.
 */


    function GameScreen(){
        var container = new createjs.Container();

//****************** ELEMENTS **********************//
        var contSaloon = new createjs.Container();
        var contQuiz = new createjs.Container();
        var contOutcome = new createjs.Container();

        var saloon, quizState, outcomeState;
        var miniLogo;

//*************** METHODS ***********************//
        this.createScreen = function(){
            saloon = AssetsManager.getInstance().getAsset("saloon");
            miniLogo = AssetsManager.getInstance().getAsset("logo-mini");

            quizState = new QuizState(contQuiz, onQuizEnd);
            quizState.create();

            outcomeState = new OutcomeState(contQuiz, contSaloon, onPlayAgain);
            outcomeState.create();

            contSaloon.addChild(saloon);
            contSaloon.manualBounds = {width:saloon.image.width, height:saloon.image.height};

            contSaloon.mouseChildren = false;
            contOutcome.mouseEnabled = contOutcome.mouseChildren = false;
        }
        this.drawScreen = function(){
            container.addChild(contSaloon, sparks.getBoxSpark(), flash.getBoxFlash(), contQuiz, contOutcome, miniLogo, sparks.getBoxFollow());
            screenCont.addChild(container);

            //LAYOUT
            rootLayout.addChild("saloon", contSaloon, new LayoutAlign(0.5, 0.5), LayoutScale.SCALE_GREATER );
            rootLayout.addChild("logo-mini", miniLogo, new LayoutAlign(0.01, 0.02), LayoutScale.SCALE_GREATER );

            //PARTICLES
            sparks.drawParticles();
            flash.drawParticles();
            flash.startNormal();

            //EVENTS
            BrandManager.getInstance().addClick(miniLogo);

            //MUSIC
            currMusic = SoundController.getInstance().play("music-game", {loop:-1, volume:0.3, interrupt:createjs.Sound.INTERRUPT_NONE } );

            //TRANSITION
            transitionIn();
        }

        this.clearScreen = function(){
            //EVENTS
            BrandManager.getInstance().removeClick(miniLogo);

            quizState.clear();
            rootLayout.removeAllChildren();

            container.removeAllChildren();
            screenCont.removeAllChildren();
        }

//**************** TRANSITION ****************//
        function transitionIn(){
            quizState.draw();
            quizState.transitionIn();
        }
        this.transitionOut = function($callback, $params){
            $callback.apply(null, $params);
        }

//**************** RENDER *****************//
        this.render = function(){
            sparks.render();
            flash.render();
            fireworks.render();
        }

//**************** HANDLERS ***************//
        var outcome;
        function onQuizEnd($outcome){
            outcome = $outcome;
            quizState.transitionOut( onQuizOut );
        }
        function onQuizOut(){
            quizState.clear();
            outcomeState.draw(outcome);
            outcomeState.transitionIn();
        }

        function onPlayAgain(){
            outcomeState.transitionOut( onOutcomeOut );

            console.log("Requesting ad");
            GameAPI.GameBreak.request(fnPause, fnResume);
        }
        function fnPause(){
            console.log("Pause game");

            Helper.getInstance().pause();
        }
        function fnResume(){
            console.log("Resume game");

            Helper.getInstance().resume();
        }

        function onOutcomeOut(){
            outcomeState.clear();
            transitionIn();
        }

    }



