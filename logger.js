var EventEmitter = require('events');


var url = "http://mylogger.io/log";

class Logger extends EventEmitter{
    log(message) {
        console.log(message);
        this.emit('MessageLogged', { id: 1, url: 'https://google.com' });
    }
}


module.exports = Logger;
