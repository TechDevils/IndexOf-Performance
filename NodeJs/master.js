var indexMinus1Check = require("./Index-1Check.js");
var indexLessThenZeroCheck = require("./IndexLessThen0Check");

var loop = 1
for(var t = 0; t < 9; t++){
    
    console.log("Loop legnth :" + loop);

    indexMinus1Check(loop);
    indexLessThenZeroCheck(loop);

    console.log("End loop legnth :" + loop);
    console.log("\n");
    loop = loop * 10;
}
