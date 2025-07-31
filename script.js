/*Constructor used to create a object in this where we can we You create as many objects as you want 🔁
You can pass different values for each object
Easy to manage and clean code
The constructor Person is a blueprint, and p1 is the real object (built using the blueprint)

Class:A class is a blueprint for creating objects.
It defines properties and methods that the objects will have.
Methods:A method is a function inside an object or class.
It performs actions using that object's data.
*/ 

/*
function Information(name, age) {
    this.EmpName = name;
    this.EmpAge = age;
}

// ✅ Add method using prototype (shared by all instances)
Information.prototype.details = function () {
    return `The employee name is ${this.EmpName}, and the age is ${this.EmpAge}`;
};

Information.prototype.info = function () {
    console.log(`The employee name is ${this.EmpName}, and the age is ${this.EmpAge}`);
};

let p1 = new Information('Dhivakaran', 19);
let p2 = new Information('hello', 19);

// Check if the function is shared
console.log(p1.details === p2.details); // true ✅

console.log(p1.details()); // "The employee name is Dhivakaran, and the age is 19"
console.log(p2.details()); // "The employee name is hello, and the age is 19"
p1.info(); // Logs: The employee name is Dhivakaran, and the age is 19

*/ 
/*
let details={
    name:"dhiva",
    age:19,
    info:function(){
        console.log(`hello ${this.name},${this.age}`)
    }
}

let res=Object.create(details)
console.log(res)
console.log(res.name)
*/ 
