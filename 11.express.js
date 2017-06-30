var express = require("express");
var app = express();

app.get("/",function(request,response){
  console.log("主页");
  response.send("Hello Express");
});

app.get("/list",function(request,response){
  console.log("列表页");
  response.send("Hello Express List Page");
});

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log(server.address());
  console.log("应用实例，访问地址为http://%s:%s",host,port);
});

app.use(express.static("images"));