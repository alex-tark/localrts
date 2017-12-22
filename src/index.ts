import app                    from './app/index';
import { ApplicationSignals } from './settings/signals.settings';
import { Logger }              from './utils/log.utils';

app.io.on(ApplicationSignals.SERVICE_CONNECTION, (socket) => {
    Logger.debug("RTS> SERVICE CONNECTION START\n");

    let currentDate = new Date();
    socket.emit(ApplicationSignals.SERVICE_MESSAGE, {
                                        status: 'connected',
                                        date  : `${ currentDate.getDate() }-${ currentDate.getMonth() + 1 }-${ currentDate.getFullYear() }`,
                                        time  : currentDate.getTime()
                                    });

    socket.on(ApplicationSignals.CUSTOMER_CONNECTED, (payload) => {
        if (!payload || !payload.uuid) { Logger.error(`SIGNAL> CUSTOMER_CONNECTED FAILED WRONG CLIENT RESPONSE`); }

        Logger.info(`SIGNAL> CUSTOMER_CONNECTED DONE ${ payload.uuid }`);
    });
});

app.io.on(ApplicationSignals.INSTANCE_TIMEOUT, () => {
    console.log("INSTANCE_CONNECTED");
});

app.io.on(ApplicationSignals.INSTANCE_LOGUT, () => {
    console.log("INSTANCE_CONNECTED");
});