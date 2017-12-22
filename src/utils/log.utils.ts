const winston    = require('winston');
const tsFormat   = () => (new Date()).toLocaleTimeString();
winston.emitErrs = true;

export class LoggerUtil {
    public logger: any;

    constructor() {
        this.logger = new winston.Logger({
            transports: [
                new winston.transports.File({
                    level: 'info',
                    filename: 'logs/main.log',
                    timestamp: tsFormat(),
                    handleExceptions: true,
                    json: true,
                    maxsize: 5242880,
                    maxFiles: 5,
                    colorize: false
                }),
                new winston.transports.Console({
                    level: 'debug',
                    handleExceptions: true,
                    timestamp: tsFormat(),
                    json: false,
                    colorize: true
                })
            ],
            exitOnError: false
        });
    }
}

// EXPORT FIELDS
const AppLogger = new LoggerUtil();
const Logger    = AppLogger.logger;

export { Logger, AppLogger };
