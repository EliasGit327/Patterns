"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var singleton_1 = require("./singleton");
var single = singleton_1.Singleton.getInstance();
single.counter = 345;
single = null;
single = singleton_1.Singleton.getInstance();
console.warn(single.counter);
//# sourceMappingURL=index.js.map