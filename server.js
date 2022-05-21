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
wss.on('connection',function connection(ws,req){
    ws.on('message',function incoming(message){
        const buf=Buffer.from(message,'utf8');
        var arr=JSON.parse(buf.toString());
	    if(Object.keys(arr).length==1){
		 //getColor(arr.message,deskLamp,plantLamp,lambader);
            wss.clients.forEach(function each(client){
                if(ws!=client){
                    client.send(JSON.stringify(arr.message));
                }

            })

            //console.log("device "+arr.deviceid+" connected");
            //ws.send("{\"deviceid\":1,\"R\":255,\"G\":0,\"B\":255}");
        }
    })
});



app.use(express.static('public'))

function getColor(Data,deskLamp,plantLamp,lambader){
    switch(Data.deviceid){
        case '1':
        deskLamp=Data;
        break;
    }
    console.log(deskLamp);
}

