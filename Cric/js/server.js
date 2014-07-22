var express=require('express');
var http=require('http');
var io=require('socket.io')(http);
var app=express();
var server=http.createServer(app);
server.listen(3000,"10.0.0.2");
io.on('connection',function(socket)
{
console.log("welcome");
socket.on('acc',function(data)
{
console.log(data);
});
});
