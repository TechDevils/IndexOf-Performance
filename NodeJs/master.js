var indexMinus1Check = require("./Index-1Check");
var indexLessThenZeroCheck = require("./IndexLessThen0Check");
var indexMinus1CheckWithHit = require("./Index-1check-with_hit");
var indexLessThenZeroCheckWithHit = require("./IndexLessThen0-with-hit");
var indexCheckBothVariableValuePosition = require("./IndexCheck-Both-VarailbelArrayPosition");
var resultsRecorderer = require("json-object-copy");
var fs = require("fs");

var loop = 1
var arrayLengths = [10,50,100,500,750,900,1000];

var results = [];

var resultsStructure = {"loopSizes":0,"arrayLegnth":0,"timeTakenToProccessMs":0,"timeTakenToProccessNs":0,"resultType" : ""};

resultsRecorderer.setBase(resultsStructure);

console.log("Base : " + resultsRecorderer.base());

var loopFunctions = ["indexMinus1Check","indexLessThenZeroCheck"];

for(var t = 0; t < 8; t++){

        for(var al = 0; al < arrayLengths.length; al++){
            var arrayLength = arrayLengths[al];  
            var poistionChecks = [0,arrayLength,(arrayLength / 2),((arrayLength / 4)*3),(arrayLength / 4)]              
            for(var f = 0; f < loopFunctions.length; f++){
                var functionToEval = loopFunctions[f];

                var functionCall = functionToEval + "(loop,arrayLength)";

                var functionCheck = eval(functionCall);

                resultsRecorderer.addResult("loopSizes",loop);
                resultsRecorderer.addResult("arrayLegnth",arrayLength);
                resultsRecorderer.addResult("timeTakenToProccessMs",functionCheck["MillerSeconds"]);
                resultsRecorderer.addResult("timeTakenToProccessNs",functionCheck["NanoSeconds"]);
                resultsRecorderer.addResult("resultType",functionToEval);
                resultsRecorderer.saveResultToOutput();
            }
            
            for(var pos = 0; pos < poistionChecks.length; pos++){

                var position = poistionChecks[pos];

                var bothCheck  = indexCheckBothVariableValuePosition(loop,arrayLength,position);

                var valuesToLog = ["Minus1","LessThanZero"];
                
                for(var r = 0; r < valuesToLog.length; r++){
                    var dataValue = bothCheck[valuesToLog[r]];

                    var name = valuesToLog[r] + "-" + position;

                    logResults(name,dataValue,loop,arrayLength)
                }
            }

            // var timeForMinsu1Check = indexMinus1Check(loop,arrayLength);
            // resultsRecorderer.addResult("loopSizes",loop);
            // resultsRecorderer.addResult("arrayLegnth",arrayLength);
            // resultsRecorderer.addResult("timeTakenToProccessMs",timeForMinsu1Check["MillerSeconds"]);
            // resultsRecorderer.addResult("timeTakenToProccessNs",timeForMinsu1Check["NanoSeconds"]);
            // resultsRecorderer.addResult("resultType","Minus1Check");
            // resultsRecorderer.saveResultToOutput();
            
            // var timeForLessThen0Check = indexLessThenZeroCheck(loop,arrayLength);
            // resultsRecorderer.addResult("loopSizes",loop);
            // resultsRecorderer.addResult("arrayLegnth",arrayLength);
            // resultsRecorderer.addResult("timeTakenToProccessMs",timeForLessThen0Check["MillerSeconds"]);
            // resultsRecorderer.addResult("timeTakenToProccessNs",timeForLessThen0Check["NanoSeconds"]);
            // resultsRecorderer.addResult("resultType","LessThanZeroCheck");
            // resultsRecorderer.saveResultToOutput();
        }
    console.log("End loop legnth :" + loop);
    console.log("\n");
    loop = loop * 10;
}

var resultsOutput = resultsRecorderer.results();
var fileName = "resultes.json"

fs.writeFile(fileName,JSON.stringify(resultsOutput,null, 4), function(err){
    if(err != undefined){
        console.log(err);
    }
});

console.log(process.hrtime());

function logResults(name,data,loop,arrayLegnth){
    resultsRecorderer.addResult("loopSizes",loop);
    resultsRecorderer.addResult("arrayLegnth",arrayLength);
    resultsRecorderer.addResult("timeTakenToProccessMs",data["MillerSeconds"]);
    resultsRecorderer.addResult("timeTakenToProccessNs",data["NanoSeconds"]);
    resultsRecorderer.addResult("resultType",name);
    resultsRecorderer.saveResultToOutput();
}