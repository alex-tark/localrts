import { ApplicationSettings } from '../settings/application.settings';
import { ApplicationSignals }  from '../settings/signals.settings';
import { Logger }              from './../utils/log.utils';
const io                     = require('socket.io-client');

const socket = io(`${ ApplicationSettings.HOSTNAME }:${ ApplicationSettings.SOCKET_PORT }`, {
    transports: [ "websocket" ]
});

socket.on(ApplicationSignals.CLIENT_CONNECTED, () => {
    Logger.debug(`SIGNAL>  CLIENT_CONNECTED TO ${ socket.id } \n`);

    socket.emit(ApplicationSignals.CUSTOMER_CONNECTED, { time: Date.now(), uuid: "b09b14fdb2052e4cbf849222ad41e6ed" }, (data) => {
        console.log(data);
    });
});

socket.on(ApplicationSignals.SERVICE_MESSAGE, (payload) => {
    Logger.debug(`SIGNAL>  SERVICE_MESSAGE DONE`, payload);
    console.log("");
});

socket.on('event', function(data){});
socket.on('disconnect', function(){});