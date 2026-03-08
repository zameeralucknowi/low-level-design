class Ilogger{
    log(){
        throw new Error('implement log')
    }
}

class Debuglogger extends Ilogger{
    log(){
        console.log('im a debug logger')
    }
}

class Infologger extends Ilogger{
    log(){
        console.log('im a info logger')
    }
}

class Errorlogger extends Ilogger{
    log(){
        console.log('im a error logger')
    }
}

class LoggerFactory{
    static createLogger(type){
        switch(type){
            case 'debug':
            return new Debuglogger();
            case 'info':
            return new Infologger();
            case 'error':
            return new Errorlogger();
            default :
            throw new Error('invalid logger type');
        }
    }
}

const debugLogger = LoggerFactory.createLogger('debug');
debugLogger.log()

const infoLogger = LoggerFactory.createLogger('info');
infoLogger.log()

const errorLogger = LoggerFactory.createLogger('error');
errorLogger.log()