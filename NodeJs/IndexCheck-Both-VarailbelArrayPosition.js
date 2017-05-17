var timing = require("time-anything");

function IndexCheckBothVariablePosition(loop, arrayLength,positionOfMatchValue){
    console.log("start time check");
    var i1;

    var checkArray = [];

    var valuePosition = (positionOfMatchValue-1);

    if(valuePosition > loop){
        valuePosition = loop - 1;
    }else if(valuePosition < 0){
        valuePosition = 0;
    }
    

    for(var a = 0; a < arrayLength; a++){
        if(a == valuePosition)
        {
            checkArray.push("1");
        }else{
            checkArray.push("0");
        }
    }

    var output = {Minus1 : {}, LessThanZero : {}};

    output.Minus1 = IndexCheckMinus1(loop,checkArray);
    output.LessThanZero = IndexCheckLessThanZero(loop,checkArray);

    return output;

}

function IndexCheckMinus1(loop,checkArray){
    console.log("Array actual length : " + checkArray.length);

    timing.start();
    
    for(i = 1; i < loop;i++){
        if(checkArray.indexOf("1") == -1){
            console.log("I am a ponitless message");
        }
    } 
    timing.end();
    //var t1 = performance.now();

    console.log("Testing perfomrance now = " + timing.timeTakenMs());
     return { "MillerSeconds":timing.timeTakenMs(), "NanoSeconds":timing.timeTakenNanoSeconds()};
}

function IndexCheckLessThanZero(loop,checkArray){
    console.log("Array actual length : " + checkArray.length);

    timing.start();
    
    for(i = 1; i < loop;i++){
        if(checkArray.indexOf("1") < 0){
            console.log("I am a ponitless message");
        }
    } 
    timing.end();
    //var t1 = performance.now();

    console.log("Testing perfomrance now = " + timing.timeTakenMs());
     return { "MillerSeconds":timing.timeTakenMs(), "NanoSeconds":timing.timeTakenNanoSeconds()};
}


module.exports = IndexCheckBothVariablePosition;