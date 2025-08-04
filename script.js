/*
Advance loops are used to iterate objects like arrays and strings etc...

1.for.. of loops
2.for.. in loops
3.for.each loops
*/ 

let named =['dhiva','nithish','sanjay','kathir']
for(let names of named){
    console.log(names)
}


let obj={name:'dhiva',age:19,college:'bishop',working:'software developer'}

for(let objs in obj){
    console.log(objs+"="+obj[objs])
}
named.forEach (function(named,index){
    console.log(named)

});

/*

Adavnced array methods:
1.filter
2.sort
3.reduce
4.some
5.find

*/ 