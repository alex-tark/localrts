import { ApplicationSettings } from '../settings/application.settings';
import { Logger }              from './../utils/log.utils';
import * as http               from 'http';
import * as IO                 from 'socket.io';
import app                     from './app.base';

class ApplicationBase {
    public io      : SocketIO.Server;
    public server  : any;
    public location: string;
    public port    : number;

    constructor() {
        let server = http.createServer(app);
        this.io    = IO.listen(server);
        server.listen(ApplicationSettings.PORT);

        Logger.debug(`EXPRESS> SERVER INITIALIZATION SUCCESS AT ${ ApplicationSettings.PORT }\n`);

        this.server   = server;
        this.location = ApplicationSettings.HOSTNAME;
        this.port     = ApplicationSettings.PORT;
    }
}

const AppLevel = new ApplicationBase();

export { AppLevel };