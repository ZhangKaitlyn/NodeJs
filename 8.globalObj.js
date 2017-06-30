console.log(__filename);
console.log(__dirname);

var timeout = setTimeout(function(){
	console.log("Hello SetTimeOut!");
}, 2000);

clearTimeout(timeout);

var intervalTimer = setInterval(function(){
	console.log("intervalTimer ");
}, 1000);

setTimeout(function(){
	clearInterval(intervalTimer);
}, 4000);

console.log(process.execPath);
console.log(process.platform);