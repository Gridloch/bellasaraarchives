/**
 * Created by AnthonyKen on 12/20/13.
 */

function OutcomeModel($onLoadCall, $onProgressCall, $onEndPoseCall){
    var onLoadCall = $onLoadCall;
    var onEndPoseCall = $onEndPoseCall;
    var onProgressCall = $onProgressCall;

    var cont, model, sheet, mLoader, result;
    this.getCont = function(){
        return cont;
    }

    this.create = function(){
        //BUTTONS
        cont = new createjs.Container();
        mLoader = new createjs.LoadQueue();

        transitionInit();
    }

    this.loadGirl = function($result){
        result = $result;

        mLoader.loadManifest( result.dataModel.apply(null, [mLoader]).urls );
        mLoader.addEventListener("progress", onSheetProgress);
        mLoader.addEventListener("complete", onSheetComplete);

        /*sheet = new createjs.SpriteSheet($result.dataModel);
        if (sheet.complete) {
            createjs.Tween.get(this).wait(2000).call(onSheetComplete, [null]);
        }else{
            sheet.addEventListener("complete", onSheetComplete);
        }*/
    }
    function onSheetComplete(event){
        mLoader.removeEventListener("progress", onSheetProgress);
        mLoader.removeEventListener("complete", onSheetComplete);
        //sheet.removeEventListener("complete", onSheetComplete);

        sheet = new createjs.SpriteSheet( result.dataModel.apply(null, [mLoader]) );
        //onLoadCall.apply();

        createjs.Tween.get(this).wait(500).call(onLoadCall);
    }
    function onSheetProgress(event){
        console.log(event.progress);
        onProgressCall.apply(null, [event.progress]);
    }

    this.draw = function(){
        model = new createjs.Sprite(sheet, "stoping");
        model.addEventListener('animationend', onModelAnimationEnd);

        model.x = -model.getBounds().width/2;//-DisplayResolution.getInstance().getGameRes().getProperty("model").size.width / 2;
        model.y = -model.getBounds().height - 50;//-DisplayResolution.getInstance().getGameRes().getProperty("model").size.height;
        cont.addChild(model);

        flash.startFlash();


    }

    this.clear = function(){
        model.removeEventListener('animationend', onModelAnimationEnd);

        cont.removeChild(model);

        sheet = null;
        model = null;
    }

//********************** TRANSITION ************************//
    function transitionInit(){

    }
    this.transitionIn = function(){
        appearGirl();
    }
    this.transitionOut = function(){
        flash.startNormal();
        createjs.Tween.get(cont).to({alpha:0}, 500);
    }

    function appearGirl(){
        cont.scaleX = cont.scaleY = DisplayResolution.getInstance().getGameRes().getProperty("model").scales[0];
        cont.x = stageSize.width / 2;
        cont.y = DisplayResolution.getInstance().getGameRes().getProperty("model").cues[0];

        cont.alpha = 0;

        model.gotoAndStop("stoping");
        createjs.Tween.get(cont).to({alpha:1}, 1000).wait(1500).to({alpha:0}, 1000).call(blinkGirl);
    }
    function blinkGirl(){
        cont.scaleX = cont.scaleY = DisplayResolution.getInstance().getGameRes().getProperty("model").scales[1];
        cont.y = DisplayResolution.getInstance().getGameRes().getProperty("model").cues[1];

        model.gotoAndStop("walking");
        createjs.Tween.get(cont).to({alpha:1}, 500).call(walkGirl);
    }
    function walkGirl(){
        var targetScale = DisplayResolution.getInstance().getGameRes().getProperty("model").scales[2];
        var targetY = DisplayResolution.getInstance().getGameRes().getProperty("model").cues[2];

        model.gotoAndPlay("walking");
        createjs.Tween.get(cont).to({y:targetY, scaleX:targetScale, scaleY:targetScale}, 7000).call(poseGirl);

        fireworks.start();
    }
    function poseGirl(){
        model.gotoAndPlay("posing");
    }
    function onEndPose(){
        onEndPoseCall.apply();
        SoundController.getInstance().play("outcome");
    }

    function onModelAnimationEnd(e){
        switch(e.name){
            case "posing":
                model.gotoAndStop("stoping");
                createjs.Tween.get(this).wait(1000).call(onEndPose);
                break;
        }
    }

//********************** HANDLERS ***********************//


}