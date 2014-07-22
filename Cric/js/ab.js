function p()
{
var server="http://10.0.0.2:3000";
        var socket=io.connect(server);
       socket.emit('acc',"hi");
}