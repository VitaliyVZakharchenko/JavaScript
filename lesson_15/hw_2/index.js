'use strict'

const crateLogger = () => {
    let memory = [];

    let logger = {
        warn,
        error,
        log,
        getRecords,
        memory,
    }

    let warn = (text) => memory.push({ message: text, dateTime: new Date(), type: 'warn' });

    let error = (text) => memory.push({ message: text, dateTime: new Date(), type: 'error' });

    let log = (text) => memory.push({ message: text, dateTime: new Date(), type: 'log' });

    let getRecords = (text) => {
        switch (text) {
            case 'warn':
                return memory.filter(obj => obj.type === 'warn').sort((a, b) => b.dateTime - a.dateTime);
            
            case 'error':
                return memory.filter(obj => obj.type === 'error').sort((a, b) => b.dateTime - a.dateTime);
            
            case 'log':
                return memory.filter(obj => obj.type === 'log').sort((a, b) => b.dateTime - a.dateTime);
            
            case undefined:
                return memory.sort((a, b) => b.dateTime - a.dateTime);
    }   
}
    return logger;
};

// export default crateLogger;

const logger = crateLogger();
// logger.log('Log in');

console.log(logger.getRecords());