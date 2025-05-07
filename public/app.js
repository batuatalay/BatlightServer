// Renk tekerleği nesnelerini oluştur
let colorWheels = {};

// Sayfa yüklendiğinde
$(document).ready(function() {
    // Renk tekerleklerini başlat
    initColorWheels();
    
    // Tüm panelleri gizle
    hideAllPanels();
    
    // Olay dinleyicilerini ayarla
    setupEventListeners();
    
    // WebSocket olaylarını ayarla
    setupWebSocket();
});

// Renk tekerleklerini başlat
function initColorWheels() {
    // Ana renk tekerlekleri
    colorWheels.lamp1 = new iro.ColorPicker("#colorWheel1");
    colorWheels.lamp2 = new iro.ColorPicker("#colorWheel2");
    colorWheels.lamp3 = new iro.ColorPicker("#colorWheel3");
    
    // Ana renk tekerleği olaylarını ayarla
    setupColorWheelEvents();
}

// Bütün panelleri gizle
function hideAllPanels() {
    $('#client').hide();
    $('#panel-lamp1').hide();
    $('#panel-lamp2').hide();
    $('#panel-lamp3').hide();
}

// Olay dinleyicilerini ayarla
function setupEventListeners() {
    // Lamba kartlarına tıklama
    $('#lamp1').click(function() {
        showPanel('panel-lamp1');
    });
    
    $('#lamp2').click(function() {
        showPanel('panel-lamp2');
    });
    
    $('#lamp3').click(function() {
        showPanel('panel-lamp3');
    });
    
    // Senaryo değişikliği
    setupScenarioEvents();
}

// Panel gösterme fonksiyonu
function showPanel(panelId) {
    hideAllPanels();
    $('#client').show();
    $('#' + panelId).show();
}

// Color wheel olaylarını ayarla
function setupColorWheelEvents() {
    // TV lambası - Lamba 1
    colorWheels.lamp1.on('color:change', function(color) {
        sendColor(1, color.rgb.r, color.rgb.g, color.rgb.b);
    });
    
    // Sinem'in masası - Lamba 2
    colorWheels.lamp2.on('color:change', function(color) {
        sendColor(2, color.rgb.r, color.rgb.g, color.rgb.b);
    });
    
    // Batu'nun masası - Lamba 3
    colorWheels.lamp3.on('color:change', function(color) {
        sendColor(3, color.rgb.r, color.rgb.g, color.rgb.b);
    });
}

// Senaryo olaylarını ayarla
function setupScenarioEvents() {
    // TV Lambası senaryosu
    $('#scenario1').change(function() {
        handleScenarioChange(1, $(this).val());
    });
    
    // Sinem'in Lambası senaryosu
    $('#scenario2').change(function() {
        handleScenarioChange(2, $(this).val());
    });
    
    // Batu'nun Lambası senaryosu
    $('#scenario3').change(function() {
        handleScenarioChange(3, $(this).val());
    });
}

// WebSocket ayarla
function setupWebSocket() {
    // Bağlantı açıldığında
    ws.onopen = function() {
        // Tüm cihazların durumlarını kontrol et
        checkAllDevices();
    };
    
    // Mesaj alındığında
    ws.onmessage = function({ data }) {
        var response = JSON.parse(data);
        if(response.action == "allive") {
            $('#status-lamp' + response.deviceid).html('Status: <span style="color:green">Active</span>');
        }
    };
}

// Tüm cihazların durumunu kontrol et
function checkAllDevices() {
    [1, 2, 3, 5].forEach(function(deviceId) {
        checkDeviceStatus(deviceId);
    });
}

// Cihaz durumunu kontrol et
function checkDeviceStatus(deviceId) {
    var sendString = {
        deviceid: deviceId,
        action: "alliveCheck"
    };
    ws.send("{\"message\":" + JSON.stringify(sendString) + "}");
}

// Senaryo değişikliklerini işle
function handleScenarioChange(lampId, scenario) {
    if(scenario == "twoColor") {
        setupTwoColorMode(lampId);
    } else {
        sendScenario(lampId, scenario);
    }
}

// İki renkli modu ayarla
function setupTwoColorMode(lampId) {
    var pickerId = 'picker' + lampId;
    var btnDivId = 'btnDiv' + lampId;
    
    // Renk seçicileri oluştur
    $('#' + pickerId).html(`
        <div class='wheel' id='colorWheelA${lampId}'></div>
        <div class='wheel' id='colorWheelB${lampId}'></div>
    `);
    
    // Ayarla düğmesini ekle
    $('#' + btnDivId).html(`<span class='btn btn-success col-md-12' id='btnSet${lampId}'>Set</span>`);
    
    // Yeni renk tekerleklerini oluştur
    var wheelA = new iro.ColorPicker('#colorWheelA' + lampId);
    var wheelB = new iro.ColorPicker('#colorWheelB' + lampId);
    
    // Ayarla düğmesine tıklama olayı ekle
    $('#btnSet' + lampId).click(function() {
        var color1 = parseRgbString(wheelA.color.rgbString);
        var color2 = parseRgbString(wheelB.color.rgbString);
        
        sendTwoColorMode(lampId, 
            color1.r, color1.g, color1.b, 
            color2.r, color2.g, color2.b
        );
    });
}

// RGB dizesini ayrıştır
function parseRgbString(rgbString) {
    // "rgb(123, 45, 67)" formatından sayıları çıkar
    var rgbValues = rgbString.replace('rgb(', '').replace(')', '').split(',');
    return {
        r: parseInt(rgbValues[0].trim()),
        g: parseInt(rgbValues[1].trim()),
        b: parseInt(rgbValues[2].trim())
    };
}

// İki renkli mod gönder
function sendTwoColorMode(lampId, fR, fG, fB, sR, sG, sB) {
    var sendString = {
        deviceid: lampId,
        animation: "2color",
        fr: fR,
        fg: fG,
        fb: fB,
        sr: sR,
        sg: sG,
        sb: sB
    };
    
    ws.send("{\"message\":" + JSON.stringify(sendString) + "}");
}

// Renk gönder
function sendColor(lampId, r, g, b) {
    var sendString = {
        deviceid: lampId,
        animation: "",
        R: r,
        G: g,
        B: b
    };
    
    ws.send("{\"message\":" + JSON.stringify(sendString) + "}");
}

// Senaryo gönder
function sendScenario(lampId, scenario) {
    var sendString = {
        deviceid: lampId,
        animation: scenario
    };
    
    ws.send("{\"message\":" + JSON.stringify(sendString) + "}");
}

// Lambayı kapat
function closeLamp(lampId) {
    sendColor(lampId, 0, 0, 0);
    $('#client').hide();
}

// Küçült
function minimize() {
    $('#client').hide();
}

// Sinem'in ayarlarını ayarla
function setSinemSettings() {
    console.log("Setting Sinem's Settings");
    setColor(1, 255, 112, 51); // TV Lambası
    setColor(2, 85, 0, 255);    // Sinem'in Lambası
    setColor(3, 255, 112, 51);  // Batu'nun Lambası
    setColor(5, 255, 84, 41);   // Duvar Lambası
}

// Renk ayarla
function setColor(lampId, r, g, b) {
    sendColor(lampId, r, g, b);
}