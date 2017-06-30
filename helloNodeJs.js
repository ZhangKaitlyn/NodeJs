const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

server.listen(port, hostname, () => {
	console.log(`服务器运行在 http://${hostname}:${port}/`);
});

exports.world = function(){
	console.log("这内容在helloNodeJs.js中");
}

function helloModule(){
	this.name = "Kaitlyn";
	this.fun = function(){
		console.log("这内容在helloNodeJs.js中");
	}
}

module.exports = helloModule;