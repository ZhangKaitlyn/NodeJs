var http = require("http");
var url = require("url");
var util = require("util");

http.createServer(function(request, respond){
	respond.writeHead(200, {"Content-Type":"text/plain;charset=utf-8"});

	// respond.end(util.inspect(url.parse(request.url, true)));

	// 访问 http://127.0.0.1:8887/index?name=kaitlyn&birthday=1994-6-15 看结果 
	var params = url.parse(request.url, true).query;
	respond.write("用户名"+params.name+"\n");
	respond.write("出生日期"+params.birthday+"\n");
	respond.end();
}).listen(8887);