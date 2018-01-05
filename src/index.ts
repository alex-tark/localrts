import { APISocketIO }    from './controllers/websocket/api.socket';
import { AppLevel }       from './app/index';
const  api: APISocketIO = new APISocketIO({
                            io    : AppLevel.io,
                            server: AppLevel.server
                          });

api.connect();
