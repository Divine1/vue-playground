var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');
 
  socket.emit('USER_MESSAGE',{"data" : "ef"});
  
  socket.on('USER_MESSAGE',function(data){
    console.log("USER_MESSAGE ",data)
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
  

http.listen(3000, function(){
  console.log('listening on *:3000');
});