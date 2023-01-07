colorWheel1.on('color:change', function(color, changes){
    device=1;
    var sendString={
        deviceid:1,
        animation:"",
        R:color.rgb.r,
        G:color.rgb.g,
        B:color.rgb.b
    }
    console.log(sendString);
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
});
colorWheel2.on('color:change', function(color, changes){
    var sendString={
        deviceid:2,
        animation:"",
        R:color.rgb.r,
        G:color.rgb.g,
        B:color.rgb.b
    }
    console.log(sendString);
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
});
colorWheel7.on('color:change', function(color, changes){
    var sendString={
        deviceid:3,
        animation:"",
        R:color.rgb.r,
        G:color.rgb.g,
        B:color.rgb.b
    }
    console.log(sendString);
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
});
colorWheel10.on('color:change', function(color, changes){
    var sendString={
        deviceid:4,
        animation:"",
        R:color.rgb.r,
        G:color.rgb.g,
        B:color.rgb.b
    }
    console.log(sendString);
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
});
colorWheel13.on('color:change', function(color, changes){
    var sendString={
        deviceid:5,
        animation:"",
        R:color.rgb.r,
        G:color.rgb.g,
        B:color.rgb.b
    }
    console.log(sendString);
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
});