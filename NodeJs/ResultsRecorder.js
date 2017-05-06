var ResultsRecorder = function(){
    var baseStructure = {};
    var resultsOutput = [];
    var currentResultObject = null;
}

ResultsRecorder.prototype.setBase = function (base){
    console.log("Entering Base set");
    this.baseStructure = cloneJsonObject(base);
    console.log("Base set");
}

ResultsRecorder.prototype.addResult = function (resultName,value){
    if(this.currentResultObject == null){
        this.currentResultObject = cloneJsonObject(this.baseStructure);
    }

    this.currentResultObject[resultName] = value;
}
ResultsRecorder.prototype.saveResultToOutput = function (){
    if(this.resultsOutput == undefined){
        this.resultsOutput = [];
    }

    this.resultsOutput.push(cloneJsonObject(this.currentResultObject));

    this.currentResultObject == null;
}

ResultsRecorder.prototype.results = function (){
    return this.resultsOutput;
}

ResultsRecorder.prototype.base = function (){
    return this.baseStructure;
}

function cloneJsonObject (objectToClone){
    var jsonAsString = JSON.stringify(objectToClone);
    return JSON.parse(jsonAsString);
}

module.exports = new ResultsRecorder();