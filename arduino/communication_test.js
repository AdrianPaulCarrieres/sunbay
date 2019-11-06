function loop(){
    
    var date = new Date();
    var data = -10 + Math.random() * 1000;

    valeurInstant = `${
        (date.getMonth() + 1).toString().padStart(2, '0')}/${
        date.getDate().toString().padStart(2, '0')}/${
        date.getFullYear().toString().padStart(4, '0')} ${
        date.getHours().toString().padStart(2, '0')}:${
        date.getMinutes().toString().padStart(2, '0')}:${
        date.getSeconds().toString().padStart(2, '0')}`;

    console.log('[',valeurInstant, '] ', data);

    sendPost(valeurInstant, data);

    setTimeout(loop, 2000);
}

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

loop();