
// --文件处理
// var fs = require('fs')
// // var data = fs.readFileSync('input.txt')
// fs.readFile('input.txt',function (err,data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(data.toString());
// })
// console.log('end');

// 1.var events = require('events')
// 2.var eventEmitter = new events.EventEmitter()
// 3.eventEmitter.emit('data_received')
// 4.eventEmitter.on('data_received')

// events模块只提供一个对象：EventEmitter
// var eventsEmitter = new events.EventEmitter()


// --事件处理
//引入events模块
var events = require('events')
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter()

var connectFun = function () {
  console.log('shizheyangma');
}
eventEmitter.on('some_project',connectFun)
eventEmitter.emit('some_project')

eventEmitter.on('arg_project',function (arg1,arg2) {
   console.log('listen1',arg1,arg2);
})
eventEmitter.on('arg_project',function (arg1,arg2) {
   console.log('listen2',arg1,arg2);
})
eventEmitter.emit('arg_project','arg1dd','arg2aa')

var listenA = function listenA() {
  console.log('this is a listenA');
}

var listenB = function listenB() {
  console.log('this is a listenB');
}

eventEmitter.addListener('connection',listenA)
eventEmitter.on('connection',listenB)
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// var listenerCount = eventEmitter.listenerCount(eventEmitter,'connection')
eventEmitter.emit('connection')

console.log(eventListeners+'个监听数量');

eventEmitter.removeListener('connection',listenA)
console.log('listentA不再受监听');
eventEmitter.emit('connection')
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听数量');

// var connectHandler = function connected() {
//   console.log('connect success');
//   // 触发data_received
//   eventEmitter.emit('data_received')
// }
//绑定事件及其事件处理程序
//绑定connection事件处理程序
// eventEmitter.on('connection',connectHandler)
// eventEmitter.on('data_received',function () {
//   console.log('data receive success');
// })

// 触发connection
// eventEmitter.emit('connection')
// console.log('程序执行完毕');