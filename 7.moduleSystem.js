var helloModule = require('./helloNodeJs');
// helloModule.world();

var module1 = new helloModule();
console.log(module1.name);
module1.fun();