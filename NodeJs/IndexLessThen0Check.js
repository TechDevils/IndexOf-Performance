var timing = require("time-anything");

function IndexLessThen0Check(loop,arrayLength){
    console.log("start time check");

    var i;

    //var checkArray50 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];
    var checkArray50 = [];

    for(var a = 0; a < arrayLength; a++){
        checkArray50.push("1");
    }

    console.log("Array actual length : " + checkArray50.length);


    timing.start();

    for(i = 1; i < loop;i++){
        if(checkArray50.indexOf("1") < 0){
            console.log("I am a ponitless message");
        }
    } 
    timing.end()   

    console.log("Testing time taken now = " + timing.timeTakenMs());
    return { "MillerSeconds":timing.timeTakenMs(), "NanoSeconds":timing.timeTakenNanoSeconds()};
}

module.exports = IndexLessThen0Check;