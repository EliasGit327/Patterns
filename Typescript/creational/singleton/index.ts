import {Singleton} from "./singleton";

var single = Singleton.getInstance();
single.counter = 345;
single = null;
single = Singleton.getInstance();

console.warn(single.counter);