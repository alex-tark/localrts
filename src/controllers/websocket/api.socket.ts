import { SignalTypes } from '../../settings/signals.settings';
import { Logger }      from './../../utils/log.utils';

export class APISocketIO {
    public io    : SocketIO.Server;
    public server: any;

    constructor(config: any) {
        this.io     = config.io;
        this.server = config.server;
    }

    public connect(): any {
        this.io.on(SignalTypes.SERVICE_CONNECTION, this.onConnect);
    }

    protected onConnect(socket: any) {
        Logger.info(`IRC> SERVICE_CONNECTION ${ socket.id }`);

        let currentDate = new Date();
        socket.emit(SignalTypes.SERVICE_MESSAGE, {
            status: 'connected',
            date  : `${ currentDate.getDate() }-${ currentDate.getMonth() + 1 }-${ currentDate.getFullYear() }`,
            time  : currentDate.getTime()
        });

        socket.on(SignalTypes.CUSTOMER_CONNECTED, this.onCustomerConnected);
        socket.on(SignalTypes.INSTANCE_TIMEOUT, this.onInstanceTimeout);
        socket.on(SignalTypes.INSTANCE_LOGOUT, this.onInstanceLogout);
    }

    // SOCKET EVENT CALLBACK METHODS
    private onCustomerConnected(payload: any): any {
        if (!payload || !payload.uuid) { Logger.error(`IRC> CUSTOMER_CONNECTED WRONG payload`); }
        Logger.info(`IRC> CUSTOMER_CONNECTED\n`);
    }

    private onInstanceTimeout(payload: any) {
        if (!payload || !payload.uuid) { Logger.error(`IRC> INSTANCE_TIMEOUT WRONG payload`); }
        Logger.info(`IRC> CUSTOMINSTANCE_TIMEOUTER_CONNECTED\n`);
    }

    private onInstanceLogout(payload: any) {
        if (!payload || !payload.uuid) { Logger.error(`IRC> INSTANCE_LOGUT WRONG payload`); }
        Logger.info(`IRC> CUSTOMER_CONNECTED\n`);
    }
}