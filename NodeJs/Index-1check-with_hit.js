var timing = require("time-anything");

function IndexMinus1Check(loop, arrayLength){
    console.log("start time check");
    var i1;

    //var checkArray50 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];
    var checkArray50 = [];

    for(var a = 0; a < arrayLength; a++){
        if(a == (arrayLength - 1))
        {
            checkArray50.push("1");
        }else{
            checkArray50.push("0");
        }
    }

    console.log("Array actual length : " + checkArray50.length);

    timing.start();
    
    for(i = 1; i < loop;i++){
        if(checkArray50.indexOf("1") == -1){
            console.log("I am a ponitless message");
        }
    } 
    timing.end();
    //var t1 = performance.now();

    console.log("Testing perfomrance now = " + timing.timeTakenMs());
     return { "MillerSeconds":timing.timeTakenMs(), "NanoSeconds":timing.timeTakenNanoSeconds()};
}

module.exports = IndexMinus1Check;