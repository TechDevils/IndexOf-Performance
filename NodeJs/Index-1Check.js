
function IndexMinus1Check(loop){
console.log("start time check");
var i1;

var checkArray50 = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"];

console.time("indexOfMinus1Check50Test");

for(i = 1; i < loop;i++){
    if(checkArray50.indexOf("1") == -1){
        console.log("I am a ponitless message");
    }
} 

console.timeEnd("indexOfMinus1Check50Test");
}

module.exports = IndexMinus1Check;