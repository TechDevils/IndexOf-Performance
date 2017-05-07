# TimeAnything 

Its a simple way of timing processes.

## Install

```bash
npm install time-anything
```


## Example

```js
var timing = require("time-anything");

timing.start();

/* Code to time  */

timing.end();


console.log("Timing Ms = " + timing.timeTakenMs() + "ms");
console.log("Timing Ns = " + timing.timeTakenNanoSeconds() + "ns");

```