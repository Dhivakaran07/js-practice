/*
Sets is a collection of unique values it cannot have dupilicates
the method of 
1.add()
2.delete()
3.has()
4.size()


*/ 

/* let fruits=new Set();
fruits.add("apple");
fruits.add("banana")
console.log(fruits)
console.log(fruits.size)
fruits.delete("apple")
console.log(fruits)
console.log(fruits.has("banana"))
let numbers=new Set([1,2,3,4,5,5])
for(let fruit of numbers){
    console.log(fruit)
}

*/

// why we go with maps means it is faster and then it gurantee in order in object no  any type of keys are allowed in maps


let fruits=new Map();
fruits.set('apple',"$100")
fruits.set('banana',"$100")
fruits.set('orange',"$100")
console.log(fruits);
console.log(fruits.get("apple"));
console.log(fruits.has("banana"));
console.log(fruits.clear())
console.log(fruits)





