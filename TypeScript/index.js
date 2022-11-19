"use strict";
// let mssg1  = "hello world ";
// console.log(mssg1);
// let msg2 = "how are you?";
// console.log(msg2);
Object.defineProperty(exports, "__esModule", { value: true });
// // let message = "Hello World";
// // console.loger(message); Error daignose 
// // let mssg3 = "hi Air";
// // const mssg3 = 5;
// // console.log(); error assignability..
// //strongly typed syntax
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true;
// console.log(b);
// //type inference
// let e = "USA";
// console.log(e);
// let f = 10.9;
// f = 22;
// console.log(f);
// let g = false;
// g = true;
// console.log(g);
//use const where variable values do not change
const a = 5;
const b = 33;
const c = "best";
//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
let z = "aaaa";
if (true) {
    let z = 4;
    //use z
}
else {
    let z = "string";
    //use z
}
console.log("let: " + z); // Error: z is not defined in this scope
