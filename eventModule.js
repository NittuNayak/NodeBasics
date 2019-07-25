const EventEmitter = require('events');

eventEmitter.on('MessageLogged', (args) => {
    console.log("Even got listened", args);
});

var Logger = require('./logger');
var logger = new Logger();
logger.on('MessageLogged', (args) => {
    console.log("Even got listened", args);
});

logger.log("message");
