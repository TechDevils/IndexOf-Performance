    var Timing = function(){
        var startTime = null;
        var processStartTime = null;
        var endTime = null;
        var processEndTime = null;
        var totalTime = -1;
        var timeIn = "ms";
    };

    Timing.prototype.start = function(){
        this.startTime = Date.now();
        this.processStartTime = process.hrtime();
    }
    Timing.prototype.end = function(){
        this.endTime = Date.now();
        this.processEndTime = process.hrtime();
    }
    Timing.prototype.timeTakenMs = function(){
        return ((this.endTime - this.startTime));
    }
    Timing.prototype.timeTakenNanoSeconds = function(){

        var secondsPast = this.processEndTime[0] - this.processStartTime[0];
        var nanoSecondsPast =  this.processEndTime[1] - this.processStartTime[1];

        var output = (secondsPast * 1e9 + nanoSecondsPast);

        this.processStartTime = null;
        this.processEndTime = null;

        return output;
    }


    module.exports = new Timing();