var events = require("events");

var eventEmitter = new events.EventEmitter();

var receiveEventHandler = function() {
	console.log("reveiveEvent");
	eventEmitter.emit("newEvent");
}

var newEventHandler = function() {
	console.log("newEvent");
}
eventEmitter.on("newEvent",newEventHandler);

eventEmitter.on("receiveEvent",receiveEventHandler);

eventEmitter.emit("receiveEvent");

console.log("程序执行完毕");