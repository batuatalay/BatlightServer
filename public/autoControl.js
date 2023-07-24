$('.close').on('click',function(){
    closeLamp(1);
    closeLamp(2);
    closeLamp(3);
    closeLamp(4);
});
$('#sinemSettingsButton').addEventListener('click', function() {
    setColor(1,255,59,33);
    setColor(2,255,59,33);
    setColor(3,255,59,33);
    setColor(4,255,59,33);
    setColor(5,255,59,33);
});

$('#sinemSettingsButton').addEventListener('touchstart', function() {
    setColor(1,255,59,33);
    setColor(2,255,59,33);
    setColor(3,255,59,33);
    setColor(4,255,59,33);
    setColor(5,255,59,33);
});