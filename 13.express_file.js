var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("images"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:"/tmp/"}).array("test_file"));

app.get("/express_file",function(req, res){
	res.sendFile(__dirname+"/html/express_file.html");
});

app.post("/file_upload",function(req,res){
	console.log(req.files[0]);

	var des_file = __dirname+"/images/fileupload/"+req.files[0].originalname;
	console.log(des_file);

	fs.readFile(req.files[0].path, function(err,data){
		fs.writeFile(des_file, data, function (err) {
			if(err){
				console.log(err);
			}else{
				var response = {
					message:"file uploaded successfully",
					filename:req.files[0].originalname
				};
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
});

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("应用实例，访问地址为http://%s:%s", host, port);
})