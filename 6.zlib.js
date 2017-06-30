var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("test.txt")
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream("test.txt.gz"));

console.log("文件压缩完成");

fs.createReadStream("test.txt.gz")
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("text1.txt"));

console.log("文件解压完成");