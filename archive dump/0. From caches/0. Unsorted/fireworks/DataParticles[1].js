/**
 * Created by AnthonyKen on 12/17/13.
 */

function DataParticles(){

}

DataParticles.FIREWORKS = function(){
    return {
        "framerate":30,
        "images":[loader.getResult("fireworks")],
        "frames":[
            [0, 0, 64, 64, 0, 0, 0],
            [64, 0, 64, 64, 0, 0, 0],
            [128, 0, 64, 64, 0, 0, 0],
            [0, 64, 64, 64, 0, 0, 0]
        ],
        "animations":{}
    };
}