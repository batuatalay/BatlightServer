$('#client').hide();
$('#desk').hide();
$('#plant').hide();
$('#lambader').hide();
$('#portable').hide();
$('#wall').hide();

$('#lambs').on('change',function(){
    $('#client').show();
    $('#desk').hide();
    $('#plant').hide();
    $('#lambader').hide();
    $('#portable').hide();
    $('#wall').hide();
    $('#'+this.value).show();
})

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
    $('#client').hide();
}
function minimize(lamp) {
    $('#client').hide();
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
//v 2.0
$('#sinemSettings').on('click', function() {
    setColor(1,255,59,33);
    setColor(2,255,59,33);
    setColor(3,255,59,33);
    setColor(4,255,59,33);
    setColor(5,255,59,33);
});
$('#lamp1').on('click',function () {
    $('#client').show();
    $('#desk').hide();
    $('#plant').hide();
    $('#lambader').hide();
    $('#portable').hide();
    $('#wall').hide();
    $('#desk').show();
});
$('#lamp2').on('click',function () {
    $('#client').show();
    $('#desk').hide();
    $('#plant').hide();
    $('#lambader').hide();
    $('#portable').hide();
    $('#wall').hide();
    $('#plant').show();
});
$('#lamp3').on('click',function () {
    $('#client').show();
    $('#desk').hide();
    $('#plant').hide();
    $('#lambader').hide();
    $('#portable').hide();
    $('#wall').hide();
    $('#lambader').show();
});
$('#lamp4').on('click',function () {
    $('#client').show();
    $('#desk').hide();
    $('#plant').hide();
    $('#lambader').hide();
    $('#portable').hide();
    $('#wall').hide();
    $('#portable').show();
});
$('#lamp5').on('click',function () {
    $('#client').show();
    $('#desk').hide();
    $('#plant').hide();
    $('#lambader').hide();
    $('#portable').hide();
    $('#wall').hide();
    $('#wall').show();
});

function setSinemSettings() {
    console.log("Setting Sinem's Settings");
    //TV Lamp
    setColor(1,255,112,51);
    //Coffee Lamp
    setColor(3,255,112,51);
    //Wall Lamp
    setColor(5,255,84,41);
}

ws.onopen = function(e) {
    var sendString = {
        deviceid:1,
        action:"alliveCheck"
    }
    // ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
    // var sendString = {
    //     deviceid:2,
    //     action:"alliveCheck"
    // }
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
    var sendString = {
        deviceid:3,
        action:"alliveCheck"
    }
    // ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
    // var sendString = {
    //     deviceid:4,
    //     action:"alliveCheck"
    // }
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
    var sendString = {
        deviceid:5,
        action:"alliveCheck"
    }
    ws.send("{\"message\":"+JSON.stringify(sendString)+"}");
};
ws.onmessage = ({data}) => {
    var response = JSON.parse(data);
    if(response.action == "allive") {
        $('#lambader'+response.deviceid).html('Status: <span style="color:green">Active</span>');
    }
}
