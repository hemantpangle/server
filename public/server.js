var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");


//server configuration
app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   //res.sendFile(path.join(___dirname + '/index.html'));
   res.send('public/index.html')
});
app.listen(8082,'0.0.0.0',()=>{
    console.log('welcome');
})