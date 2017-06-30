var fs=require("fs");
var data=fs.readFileSync("helloNodeJs.js");
console.log(data.toString());
console.log("程序执行结束");

var data1=fs.readFile("helloNodeJs.js", function(err,data) {
	if (err) {
		return console.error(err);
	}
	console.log(data.toString());
});
console.log("程序执行结束");

fs.stat("1.newApp.js",function(err,stats){
	console.log(err);
	console.log(stats);
});