var express = require('express');  // 'express' coming from node module
var bodyParser = require('body-parser'); // fetch parser module
var app = express(); // instance of express
var http = require('http').Server(app); // http for websocket
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


var messages =[
  {
  name:'Node',message: 'hi'},
  {name:'NPM', message: 'hello'}
]

app.get('/messages', (req, res)=>{
  res.send(messages)
})
app.post('/messages', (req,res)=>
{
messages.push(req.body)
io.emit('message', req.body)
res.sendStatus(200)
})

io.on('connection',(socket)=>{
  console.log('USER CONNECTED')
})

var server = http.listen(3008, ()=>{
  console.log("server running on", server.address().port);
});
