const os = require('os');
var totalmem = os.totalmem();
var freemem = os.freemem();

console.log(`Total memory ${totalmem}`);
console.log(`Free memory ${freemem}`);

