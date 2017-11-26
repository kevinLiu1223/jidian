// var events = require('events')
// var eventEmitter = new events.EventEmitter()
// eventEmitter.emit('error')


// buffer 缓冲区
// var buffer = new Buffer(290)
// console.log(buffer);
// var buf = new Buffer([10, 20, 30, 40, 50])
// // console.log(buf);
// var buff = new Buffer("www.runoob.com","utf-8")
// buff.write(string[, offset[, length]][, encoding])
// console.log(buff);

var fs = require('fs')
var data = ""
var readerSteam = fs.createReadStream('input.txt')
console.log(readerSteam);
