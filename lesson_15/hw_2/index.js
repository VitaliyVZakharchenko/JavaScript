'use strict'

const crateLogger = () => {
    let memory = [];

    const warn = (text) => {memory.push({ message: text, dateTime: new Date(), type: 'warn' })};

    const error = (text) => {memory.push({ message: text, dateTime: new Date(), type: 'error' })};

    const log = (text) => {memory.push({ message: text, dateTime: new Date(), type: 'log' })};

    const getRecord = (text) => {
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
    return {
        warn,
        error,
        log,
        getRecord,
    }
};

const logger = crateLogger();
logger.log('');

console.log(logger.getRecord());