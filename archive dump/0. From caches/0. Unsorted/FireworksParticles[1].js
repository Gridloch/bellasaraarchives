/**
 * Created by AnthonyKen on 12/17/13.
 */

function FireworksParticles(){
    this.boxFire = new createjs.Container();
    this.emitters = new Array();
    this.positions = DisplayResolution.getInstance().getGameRes().getProperty("fireworks").positions;
}

FireworksParticles.prototype.getBox = function(){
    return this.boxFire;
}

FireworksParticles.prototype.create = function(){
    this.proton = new Proton();
    this.renderer = new Proton.Renderer('easel', this.proton, this.boxFire);

    if(Helper.getInstance().supportBlendMode) this.boxFire.compositeOperation = "lighter"
    this.boxFire.mouseChildren = false;
    this.boxFire.mouseEnabled = false;

    var sheet = new createjs.SpriteSheet( DataParticles.FIREWORKS() );
    for(var i = 0; i < this.positions.length; i++){

        var temp_x = this.positions[i].x;
        var temp_y = this.positions[i].y;

        var fire = new FireEmitter(this.boxFire,[
            new createjs.Bitmap (createjs.SpriteSheetUtils.extractFrame(sheet,0)),
            new createjs.Bitmap (createjs.SpriteSheetUtils.extractFrame(sheet,1)),
            new createjs.Bitmap (createjs.SpriteSheetUtils.extractFrame(sheet,2))
        ],{x: temp_x, y: temp_y});
        fire.create(this.proton);

        this.emitters.push(fire);
    }

    this.renderer.start();
}

FireworksParticles.prototype.render = function(){
    this.proton.update();

    for(var i =0; i < this.positions.length; i++){
        this.emitters[i].render();
    }
}

FireworksParticles.prototype.start = function(){
    for(var i = 0; i < this.positions.length; i++){
        if(i%2==0)
            createjs.Tween.get(this).wait(i*1000).call(this.emit,[i]);
        else
            createjs.Tween.get(this).wait((i-1)*1000).call(this.emit,[i]);
    }
}
FireworksParticles.prototype.emit = function(i){
    this.emitters[i].emit();
    SoundController.getInstance().play("pow", {loop:0, volume:0.2+(i*0.2), interrupt:createjs.Sound.INTERRUPT_NONE } );
}