var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlencodecParser = bodyParser.urlencoded({extended:false});

app.get("/",function(request,response){
  console.log("主页");
  response.send("Hello Express");
});

app.get("/html/express_get_post",function(request,response){
  console.log("express表单页（GET/POST）");
  response.sendFile(__dirname + "/html/express_get_post.html");
});

app.get("/process_get",function(request,response){
	var res = {
		"Name":request.query.first_name_get,
		"EngName":request.query.eng_name_get
	};

	console.log(res);
	response.end(JSON.stringify(res));
});

app.post("/process_post",urlencodecParser,function(request,response){
	console.log(request.body);
	var res = {
		"Name":request.body.first_name_post,
		"EngName":request.body.eng_name_post
	};
	response.end(JSON.stringify(res));
});

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log(server.address());
  console.log("应用实例，访问地址为http://%s:%s",host,port);
});