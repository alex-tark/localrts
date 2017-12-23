import { APISocketIO } from './controllers/websocket/api.socket';
import { AppLevel }    from './app/index';

let api = new APISocketIO({
    io    : AppLevel.io,
    server: AppLevel.server
});

api.connect();
