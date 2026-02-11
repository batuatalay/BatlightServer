var express = require('express');
var app = express();
const http = require('http');
const WebSocket = require('ws');
const port = 3000;
const fs = require('fs');
const path = require('path');

// State dosyası yolu
const STATE_FILE = path.join(__dirname, 'state.json');

// Varsayılan state
const defaultState = {
    1: { R: 255, G: 42, B: 0, brightness: 255, animation: '' },
    2: { R: 255, G: 42, B: 0, brightness: 255, animation: '' },
    3: { R: 255, G: 42, B: 0, brightness: 255, animation: '' },
    4: { R: 255, G: 42, B: 0, brightness: 255, animation: '' },
    5: { R: 255, G: 42, B: 0, brightness: 255, animation: '' }
};

// State'i oku
function loadState() {
    try {
        if (fs.existsSync(STATE_FILE)) {
            const data = fs.readFileSync(STATE_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.log('State dosyası okunamadı, varsayılan kullanılıyor:', error.message);
    }
    return { ...defaultState };
}

// State'i kaydet
function saveState(state) {
    try {
        fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
    } catch (error) {
        console.log('State kaydedilemedi:', error.message);
    }
}

// State'i güncelle (WebSocket mesajından)
function updateStateFromMessage(message) {
    const state = loadState();
    const deviceId = message.deviceid;

    if (deviceId && state[deviceId]) {
        // Renk güncellemesi
        if (message.R !== undefined) {
            state[deviceId].R = message.R;
            state[deviceId].G = message.G;
            state[deviceId].B = message.B;
            state[deviceId].animation = '';
        }
        // Animasyon güncellemesi
        if (message.animation !== undefined && message.animation !== '') {
            state[deviceId].animation = message.animation;
        }
        // Parlaklık güncellemesi
        if (message.brightness !== undefined) {
            state[deviceId].brightness = message.brightness;
        }
        saveState(state);
    }
}

// Başlangıçta state'i yükle
let lampState = loadState();
saveState(lampState); // Dosya yoksa oluştur

var server = app.listen(port, function() {
    console.log(port + ' dinleniyor');
});

const wss = new WebSocket.Server({ server });

// JSON body parser
app.use(express.json());

// CORS header (isteğe bağlı)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// GET /api/state - Tüm lambaların durumunu döndür
app.get('/api/state', (req, res) => {
    const state = loadState();
    res.json(state);
});

// GET /api/state/:deviceId - Tek bir lambanın durumunu döndür
app.get('/api/state/:deviceId', (req, res) => {
    const state = loadState();
    const deviceId = req.params.deviceId;
    if (state[deviceId]) {
        res.json(state[deviceId]);
    } else {
        res.status(404).json({ error: 'Device not found' });
    }
});

// POST /api/state/:deviceId - Bir lambanın durumunu güncelle
app.post('/api/state/:deviceId', (req, res) => {
    const state = loadState();
    const deviceId = req.params.deviceId;
    const { R, G, B, brightness, animation } = req.body;

    if (!state[deviceId]) {
        state[deviceId] = { ...defaultState[1] };
    }

    if (R !== undefined) state[deviceId].R = R;
    if (G !== undefined) state[deviceId].G = G;
    if (B !== undefined) state[deviceId].B = B;
    if (brightness !== undefined) state[deviceId].brightness = brightness;
    if (animation !== undefined) state[deviceId].animation = animation;

    saveState(state);
    res.json(state[deviceId]);
});

wss.on('connection', function connection(ws, req) {
    ws.on('message', function incoming(message) {
        const buf = Buffer.from(message, 'utf8');
        fs.appendFileSync("logs/log.txt", buf + " \n");
        try {
            var arr = JSON.parse(buf);
            if (Object.keys(arr).length == 1) {
                // State'i güncelle
                updateStateFromMessage(arr.message);

                wss.clients.forEach(function each(client) {
                    if (ws != client) {
                        client.send(JSON.stringify(arr.message));
                    }
                });
            }
        } catch (error) {
            console.log(error + buf.toString());
        }
    })
});

app.use(express.static('public'))

