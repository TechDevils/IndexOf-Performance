var indexMinus1Check = require("./Index-1Check");
var indexLessThenZeroCheck = require("./IndexLessThen0Check");
var resultsRecorderer = require("./ResultsRecorder");

var loop = 1
var arrayLengths = [10,50,100,500,750,900,1000];
var results = [];

var resultsStructure = {"loopSizes":0,"arrayLegnth":0,"timeTakenToProccessMs":0,"timeTakenToProccessNs":0,"resultType" : ""};

resultsRecorderer.setBase(resultsStructure);

console.log("Base : " + resultsRecorderer.base());

for(var t = 0; t < 10; t++){

        for(var al = 0; al < arrayLengths.length; al++){
            var arrayLength = arrayLengths[al];                
            
            var timeForMinsu1Check = indexMinus1Check(loop,arrayLength);
            resultsRecorderer.addResult("loopSizes",loop);
            resultsRecorderer.addResult("arrayLegnth",arrayLength);
            resultsRecorderer.addResult("timeTakenToProccessMs",timeForMinsu1Check["MillerSeconds"]);
            resultsRecorderer.addResult("timeTakenToProccessNs",timeForMinsu1Check["NanoSeconds"]);
            resultsRecorderer.addResult("resultType","Minus1Check");
            resultsRecorderer.saveResultToOutput();
            
            var timeForLessThen0Check = indexLessThenZeroCheck(loop,arrayLength);
            resultsRecorderer.addResult("loopSizes",loop);
            resultsRecorderer.addResult("arrayLegnth",arrayLength);
            resultsRecorderer.addResult("timeTakenToProccessMs",timeForLessThen0Check["MillerSeconds"]);
            resultsRecorderer.addResult("timeTakenToProccessNs",timeForLessThen0Check["NanoSeconds"]);
            resultsRecorderer.addResult("resultType","LessThanZeroCheck");
            resultsRecorderer.saveResultToOutput();
        }
    console.log("End loop legnth :" + loop);
    console.log("\n");
    loop = loop * 10;
}

console.log(resultsRecorderer.results());
console.log(process.hrtime());