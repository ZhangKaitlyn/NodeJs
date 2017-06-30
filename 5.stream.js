var fs = require("fs");
var data = "";

var readStream = fs.createReadStream("1.newApp.js");
readStream.setEncoding("UTF8");

readStream.on("data",function(chunk){
	data += chunk;
});

readStream.on("end",function(){
	console.log(data);
});

readStream.on("error",function(err){
	console.log(err);
});

console.log("程序执行完毕");

// var dataWrite = "stream写入";
var writeStream = fs.createWriteStream("test.txt");
// writeStream.write(dataWrite,"UTF8");
// writeStream.end();

writeStream.on("finish",function(){
	console.log("stream写入完成");
});

writeStream.on("error",function(err){
	console.log(err);
});
console.log("程序执行完毕");

readStream.pipe(writeStream);
console.log("程序执行完毕");