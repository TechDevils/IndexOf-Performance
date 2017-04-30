function IndexLessThen0Check(loop){
    console.log("start time check");

    var i;

    var checkArray50 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];

    console.time("indexOfLessThen0Check50Test");

    for(i = 1; i < loop;i++){
        if(checkArray50.indexOf("1") < 0){
            console.log("I am a ponitless message");
        }
    } 

    console.timeEnd("indexOfLessThen0Check50Test");
}

module.exports = IndexLessThen0Check;