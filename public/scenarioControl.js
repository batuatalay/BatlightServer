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
                deviceid:3,
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
$('#scenario4').on('change',function(){
       if(this.value=="twoColor"){
        $('#picker4').html("");
        $('#picker4').html("<div class='wheel' id='colorWheelDemo11'></div><div class='wheel' id='colorWheelDemo12'></div>");
        $('#btnDiv4').html("<span class='btn btn-success col-md-12' id='btn1'>Set</span>");
        var colorWheel11 = new iro.ColorPicker("#colorWheelDemo11");
        var colorWheel12 = new iro.ColorPicker("#colorWheelDemo12");
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
                deviceid:4,
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
           deviceid:4,
           animation:"rainbow"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
    if(this.value=="fallin"){
        var sendString={
           deviceid:4,
           animation:"fallin"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
    }
    if(this.value=="redVibe"){
        var sendString={
           deviceid:4,
           animation:"redVibe"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
    if(this.value=="partyVibe"){
        var sendString={
           deviceid:4,
           animation:"partyVibe"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
});

$('#scenario5').on('change',function(){
       if(this.value=="twoColor"){
        $('#picker5').html("");
        $('#picker5').html("<div class='wheel' id='colorWheelDemo14'></div><div class='wheel' id='colorWheelDemo15'></div>");
        $('#btnDiv5').html("<span class='btn btn-success col-md-12' id='btn1'>Set</span>");
        var colorWheel11 = new iro.ColorPicker("#colorWheelDemo11");
        var colorWheel12 = new iro.ColorPicker("#colorWheelDemo12");
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
                deviceid:5,
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
           deviceid:5,
           animation:"rainbow"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
    if(this.value=="fallin"){
        var sendString={
           deviceid:5,
           animation:"fallin"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
    }
    if(this.value=="redVibe"){
        var sendString={
           deviceid:5,
           animation:"redVibe"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
    if(this.value=="partyVibe"){
        var sendString={
           deviceid:5,
           animation:"partyVibe"
        }
        ws.send("{\"message\":"+JSON.stringify(sendString)+"}");

    }
});