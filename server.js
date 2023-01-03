var express= require('express');
var app=express();
const http=require('http');
const WebSocket=require('ws');
const port=80;
var server=app.listen(port,function(){
    console.log(port+' dinleniyor');
});
const wss=new WebSocket.Server({server});
var deskLamp;
var plantLamp;
var lambader;
const fs = require('fs');
wss.on('connection',function connection(ws,req){
    ws.on('message',function incoming(message){
        const buf=Buffer.from(message,'utf8');
        fs.appendFileSync("logs/log.txt", buf + " \n");
        try{
            var arr=JSON.parse(buf);
            if(Object.keys(arr).length==1){
                wss.clients.forEach(function each(client){
                    if(ws!=client){
                        client.send(JSON.stringify(arr.message));
                    }

                });
            }
        }
        catch (error) {
            console.log(error + buf.toString());
        }
    })
});
app.use(express.static('public'))

