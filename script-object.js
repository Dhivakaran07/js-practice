let valuess={firstname:"dhiva",lastname:"karan",age:"19",hooby:"reading books"}
/*
        1.object.keys
        2.object.values
        3.object.freeze
        4.object.assign
        5.object.hasownproperty
        6.object.entries
        7.object.seal
*/
// object.keys

// let keys=Object.keys(valuess)
// console.log(keys)

// // 2.object.values
// let values=Object.values(valuess)
// console.log(values)
// // freeze
// console.log(Object.freeze(valuess))
// let res=valuess.info="hello"
// console.log(valuess);
// //seal
// console.log(Object.seal(valuess));
// valuess.age="12";
// // console.log(val)
//   //here we modify
//   console.log(valuess);

// console.log(Object.entries(valuess))
// console.log(valuess)
// assign
// let news={names:"dhiva"}
// console.log(Object.assign(valuess,news))
// math function
let val1=123.56
console.log(Math.ceil(val1));
console.log(Math.floor(val1));
console.log(Math.round(val1));
console.log(Math.min(12,23,32,23232));
console.log(Math.max(12,23,32,23232));
// current date
let d = new Date();

console.log(d.getFullYear());  // 2025
console.log(d.getMonth());     // 6 (July, since months are 0-indexed)
console.log(d.getDate());      // 2
console.log(d.getDay());       // 3 (Tuesday; 0 = Sunday)
console.log(d.getHours());     // current hour
console.log(d.getMinutes());   // current minute
console.log(d.getSeconds());   // current second

  


