var express= require('express');
var app=express();
const http=require('http');
const WebSocket=require('ws');
const port=3000;
var server=app.listen(3000,function(){
    console.log(3000+' dinleniyor');
});
const wss=new WebSocket.Server({server});
var deskLamp;
var plantLamp;
var lambader;
const fs = require('fs');
wss.on('connection',function connection(ws,req){
    ws.on('message',function incoming(message){
        const buf=Buffer.from(message,'utf8');
        fs.writeFile('/root/public/log.txt', buf, err => {
          if (err) {
            console.error(err);
          }
        });
        var arr=JSON.parse(buf.toString());
	    if(Object.keys(arr).length==1){
            wss.clients.forEach(function each(client){
                if(ws!=client){
                    client.send(JSON.stringify(arr.message));
                }

            })
        }
    })
});
app.use(express.static('public'))

