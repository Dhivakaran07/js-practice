/*
Array destructure is one of the way to extract the array values in past we use index way but it is way shorter and code optimization.
so we use this array destructure.

1.we create a array and then we assign a array value to the variable below have syntax.
2.syntax:
let or const[var1,variable2,variable3]=array name :

*/ 


/* console.log(`**********array destructure*********`)
let PlacedMembers=["dhiva","sanjay","nithish","kathir"]
let [a,b,c,d]=PlacedMembers;
console.log(`******** object destructure*********`)

let Details={

    names:"dhivakaran",
    age:19,
    Role:"developer"
};

let{names:myname,age,Role}=Details;
console.log(myname)
*/

/*console.log(`**********Array spread operator*********`) 

let arr1=[1,2,3,4,5];
let arr2=[...arr1];
console.log(arr2)
*/

/*
// use to merge the arrays:

let arr1=[1,2,3,4,5,6];
let arr2=[1,2,3,8,9];
let res=[...arr1,...arr2]
console.log(res)
*/ 
/*
// We also spread the charcters use of the spread opearators

let char="dhiva"
let res=[...char]
console.log(res)

*/

/* 
console.log(`*********skipping values in array**********`)
let arr1=[1,2,3]
let[a,,b]=arr1 
console.log(b)

*/

/*
// default method we use this we does not have b value this is very useful
let [a , b="default"] = ["hello"]

console.log(b);  
*/

/*console.log(`nested array`)

let array=[1,[1,2,3,4],[3,3]]

let  [a,[,b,...others],[,c]]=array; //in this we also use the rest operator also
console/log(others);

*/

/*console.log(`*********object destructure spraed operator*************`)
let Details={
    name:"dhivakaran",
    age:20,
    role:"developer",
    mode:"wfh"
}

let{age,...other}=Details;
console.log(other)
*/
/* console.log(`********nested obejects***********`)

let Details={
    age:19,
    mode:"wfh",
    others:{
        native:"thuraiyur",
        area:"near LA ciniema"
    }
}

// let{age,mode,others:{...others}}=Details
// console.log(others)

let {...details}=Details;
console.log(details)
*/

/*console.log(`*********function destructure**********`)

function add(a,b,others){
    console.log(a+b)
    console.log(others)
  
}
let values=[1,10,12,13,14,15]
let[a,b,...others]=values;
add(a,b,others)
*/

/* console.log(`*******skipping in objects*******`)
let details={
    name:"dhivakaran",
    age:19,
    role:"developer"
}
let{name,,role}=details
*/

/*console.log(`*********modern operator*********`)
// Nullish coalescing
let score=10;
let result=score??10
*/

console.log(`********optionam operator*******`)
let details={
    name:"dhiva",
    age:19,
   others:{
    native:"dhiva",
    district:"tiruchirappalli"
   }
}

console.log(details?.class)
















