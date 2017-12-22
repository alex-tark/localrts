import * as http               from 'http';
import * as IO                 from 'socket.io';
import app                     from './app.base';
import { ApplicationSettings } from '../settings/application.settings';
import { Logger }              from './../utils/log.utils';

class AppLevel {
    public schema: any;

    constructor() {
        let server = http.createServer(app);
        let socket = IO.listen(server);
        server.listen(ApplicationSettings.SOCKET_PORT);

        Logger.debug(`SERVER INITIALIZATION SUCCESS ON PORT ${ ApplicationSettings.SOCKET_PORT }`);

        this.schema = {
            io      : socket,
            server  : server,
            location: ApplicationSettings.HOSTNAME,
            port    : ApplicationSettings.SOCKET_PORT
        }
    }
}

const ApplicationLevel = new AppLevel().schema;
export default ApplicationLevel;