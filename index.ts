import WebSocket, { WebSocketServer } from 'ws';
import midi from 'midi';

const wss = new WebSocketServer({ port: 8080 });

// create a readable stream
const stream = midi.createReadStream();

/*
// createReadStream also accepts an optional `input` param
const input = new midi.Input();
input.openVirtualPort('hello world');

const stream2 = midi.createReadStream(input);
*/

// stream2.pipe(require('fs').createWriteStream('something.bin'));

wss.on('connection', function connection(ws) {

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.on('error', console.error);
    ws.send('something');
});