import WebSocket, { createWebSocketStream } from 'ws';


const wss = new WebSocketServer({ port: 8080 });

const ws = new WebSocket('wss://websocket-echo.com/');

const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

duplex.on('error', console.error);

duplex.pipe(process.stdout);
process.stdin.pipe(duplex);