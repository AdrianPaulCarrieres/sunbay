const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

var  portName = process.argv[2];

const port = new SerialPort(portName, { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Read the port data
port.on("open", () => {
    console.log('serial port open');
});
parser.on('data', data => {

    var date = new Date();

    valeurInstant = `${
        (date.getMonth() + 1).toString().padStart(2, '0')}/${
        date.getDate().toString().padStart(2, '0')}/${
        date.getFullYear().toString().padStart(4, '0')} ${
        date.getHours().toString().padStart(2, '0')}:${
        date.getMinutes().toString().padStart(2, '0')}:${
        date.getSeconds().toString().padStart(2, '0')}`;

    console.log('[',valeurInstant, '] ', data);

    sendPost(valeurInstant, data);
});

function sendPost(instant, luminosite){
    const https = require('https');

    const data = JSON.stringify({
        instant: instant,
        luminosite: luminosite
    });

    const options = {
        hostname: 'localhost',
        port: 8080,
        path: '',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', (d) => {
            process.stdout.write(d)
        });
    });

    req.on('error', (error) => {
        console.error(error)
    });

    req.write(data);
    req.end();
}