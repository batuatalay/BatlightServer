$('#client').hide();
$('#desk').hide();
$('#plant').hide();
$('#lambader').hide();
$('.close').on('click',function(){
    closeLamp(1);
    closeLamp(2);
    closeLamp(3);
});
$('.white').on('click',function(){
 setColor(1,255,255,255);
 setColor(2,255,255,255);
 setColor(3,255,255,255);
});
$('.amazon').on('click',function(){
    setColor(1,0,255,150);
    setColor(2,150,255,0);
    setColor(3,15,255,15);
});
$('.demon').on('click',function(){
    setColor(1,0,0,255);
    setColor(2,150,0,255);
    setColor(3,0,150,255);
});
$('.party').on('click',function(){
    party(1,255,0,0,0,0,255);
    party(2,0,0,255,255,0,0);
    party(3,125,0,255,255,0,125);
   });
   $('.hot').on('click',function(){
    setColor(1,255,0,0);
    setColor(2,255,0,255);
    setColor(3,255,0,10);
   });

$('#lambs').on('change',function(){
    $('#client').show();
    $('#desk').hide();
    $('#plant').hide();
    $('#lambader').hide();
    $('#'+this.value).show();
})

$('#scenario1').on('change',function(){
    if(this.value=="twoColor"){
        $('#picker').html("");
        $('#picker').html("<div class='wheel' id='colorWheelDemo3'></div><div class='wheel' id='colorWheelDemo4'></div>");
        $('#btnDiv1').html("<span class='btn btn-success col-md-12' id='btn1'>Set</span>");
        var colorWheel3 = new iro.ColorPicker("#colorWheelDemo3");
        var colorWheel4 = new iro.ColorPicker("#colorWheelDemo4");
        $('#btn1').on('click',function(){
            var color1=colorWheel3.color.rgbString;
            color1=color1.slice(4);
            color1=color1.slice(0,-1);
            var color2=colorWheel4.color.rgbString;
            color2=color2.slice(4);
            color2=color2.slice(0,-1);
            var arr1=color2.split(',');
            var arr2=color1.split(',');
            var sendString={
                deviceid:1,
                animation:"2color",
                fr:$.trim(arr1[0]),
                fg:$.trim(arr1[1]),
                fb:$.trim(arr1[2]),
                sr:$.trim(arr2[0]),
                sg:$.trim(arr2[1]),
                sb:$.trim(arr2[2])
            };

            ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
        });
    }
    if(this.value=="rainbow"){
	var sendString={
	   deviceid:1,
	   animation:"rainbow"
	}
	ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
    if(this.value=="fallin"){
        var sendString={
           deviceid:1,
           animation:"fallin"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
    }
    if(this.value=="redVibe"){
        var sendString={
           deviceid:1,
           animation:"redVibe"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
});
$('#scenario2').on('change',function(){
    if(this.value=="twoColor"){
    $('#picker2').html("");
    $('#picker2').html("<div class='wheel' id='colorWheelDemo5'></div><div class='wheel' id='colorWheelDemo6'></div>");
    $('#btnDiv2').html("<span class='btn btn-success col-md-12' id='btn2'>Set</span>");
    var colorWheel5 = new iro.ColorPicker("#colorWheelDemo5");
    var colorWheel6 = new iro.ColorPicker("#colorWheelDemo6");
    $('#btn2').on('click',function(){
        var color1=colorWheel5.color.rgbString;
        color1=color1.slice(4);
        color1=color1.slice(0,-1);
        var color2=colorWheel6.color.rgbString;
        color2=color2.slice(4);
        color2=color2.slice(0,-1);
        console.log(color1);
        console.log(color2);

        var arr1=color2.split(',');
        var arr2=color1.split(',');
        var sendString={
            deviceid:2,
            animation:"2color",
            fr:$.trim(arr1[0]),
            fg:$.trim(arr1[1]),
            fb:$.trim(arr1[2]),
            sr:$.trim(arr2[0]),
            sg:$.trim(arr2[1]),
            sb:$.trim(arr2[2])
        };
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
    });
    }
    if(this.value=="rainbow"){
        var sendString={
           deviceid:2,
           animation:"rainbow"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
    if(this.value=="fallin"){
        var sendString={
           deviceid:2,
           animation:"fallin"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
    }
    if(this.value=="redVibe"){
        var sendString={
           deviceid:2,
           animation:"redVibe"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
});
$('#scenario3').on('change',function(){
       if(this.value=="twoColor"){
        $('#picker3').html("");
        $('#picker3').html("<div class='wheel' id='colorWheelDemo8'></div><div class='wheel' id='colorWheelDemo9'></div>");
        $('#btnDiv3').html("<span class='btn btn-success col-md-12' id='btn1'>Set</span>");
        var colorWheel8 = new iro.ColorPicker("#colorWheelDemo8");
        var colorWheel9 = new iro.ColorPicker("#colorWheelDemo9");
        $('#btn1').on('click',function(){
            var color1=colorWheel8.color.rgbString;
            color1=color1.slice(4);
            color1=color1.slice(0,-1);
            var color2=colorWheel9.color.rgbString;
            color2=color2.slice(4);
            color2=color2.slice(0,-1);
            var arr1=color2.split(',');
            var arr2=color1.split(',');
            var sendString={
                deviceid:1,
                animation:"2color",
                fr:$.trim(arr1[0]),
                fg:$.trim(arr1[1]),
                fb:$.trim(arr1[2]),
                sr:$.trim(arr2[0]),
                sg:$.trim(arr2[1]),
                sb:$.trim(arr2[2])
            };

            ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
        });
    } 
    if(this.value=="rainbow"){
        var sendString={
           deviceid:3,
           animation:"rainbow"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
    if(this.value=="fallin"){
        var sendString={
           deviceid:3,
           animation:"fallin"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
    }
    if(this.value=="redVibe"){
        var sendString={
           deviceid:3,
           animation:"redVibe"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
    if(this.value=="partyVibe"){
        var sendString={
           deviceid:3,
           animation:"partyVibe"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
});
function party(lampId,fR,fG,fB,sR,sG,sB){
    var sendString={
        deviceid:lampId,
        animation:"2color",
        fr:fR,
        fg:fG,
        fb:fB,
        sr:sR,
        sg:sG,
        sb:sB
    };
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
}
function closeLamp(lamp){
    var sendString={
        deviceid:lamp,
        animation:"",
        R:0,
        G:0,
        B:0
    }
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
}
function setColor(lampId,colorR,colorG,colorB){
    var sendString={
        deviceid:lampId,
        animation:"",
        R:colorR,
        G:colorG,
        B:colorB
    }
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

}

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
