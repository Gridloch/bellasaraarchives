/**
 * Created by AnthonyKen on 12/12/13.
 */

function OutcomeState($container, $containerSaloon, $onPlayAgain){
    var container = $container;
    var contSaloon = $containerSaloon;
    var onPlayAgain = $onPlayAgain;

    var outcome, buttons, procesing, model;
    var result;

//*********************** MAIN *******************************//
    this.create = function(){
        //OUTCOME
        outcome = new OutcomeController();
        outcome.create();

        procesing = new OutcomeProcesing();
        procesing.create();

        buttons = new OutcomeButtons(onPlayAgain);
        buttons.create();

        model = new OutcomeModel(onLoadModel, onProgressModel, onEndPose);
        model.create();
    }

    this.draw = function($outcome){
        result = $outcome;

        //CONTAINERS
        contSaloon.addChild(model.getCont(), fireworks.getBox());

        //OUTCOME
        container.addChild( outcome.getCont(), procesing.getCont(), buttons.getCont() );
    }

    this.clear = function(){
        outcome.clear();
        buttons.clear();
        model.clear();
    }

//********************** PROCESS *********************//
    function showProcess(){
        procesing.draw();
        procesing.transitionIn();
    }
    function hideProcess($callback){
        procesing.transitionOut($callback);
    }
    function onHideProcess(){
        procesing.clear();
        drawGirl();
    }

//********************** GIRL *********************//
    function showGirl(){
        showProcess();
        createjs.Tween.get(this).wait(1000).call(loadGirl);
    }
    function loadGirl(){
        model.loadGirl(result);
    }
    function onLoadModel(){
        hideProcess(onHideProcess);
    }
    function onProgressModel($pct){
        procesing.progress($pct, 1);
    }
    function drawGirl(){
        model.draw();
        model.transitionIn();
    }
    function onEndPose(){
        outcome.draw(result);
        outcome.transitionIn();

        createjs.Tween.get(this).wait(1000).call(showButtons);
    }


//********************* BUTTONS *************************//
    function showButtons(){
        buttons.draw();
        buttons.transitionIn();
    }

//********************** TRANSITION *********************//
    this.transitionIn = function(){
        showGirl();
    }

    this.transitionOut = function($callback){
        outcome.transitionOut();
        model.transitionOut();
        buttons.transitionOut($callback);
    }
}