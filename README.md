# IndexOf-Performance
A simple project to work out which is fast IndexOf(x) == -1 or IndexOf(x) &lt; 0 

This is something that i have tried to google and not come up with very much.

So indexOf() == -1 or indexOf() < 0 or indexOf() == -1 vs indexOf() < 0 will most likely wont matter for most users however if you wanted to process an array with 50 items a million items its a question wort asking. 

So to test this i have got a simple NodeJs app that registers the times taken to call 
