/*
OOP is a programming paradigm that organizes code using objects (real-world entities) instead of just functions and logic. Here's why it's powerful and widely used:
there is having methods 
1.Inheritance-we acces the data from the parent class use of extends we take parent property into out children
2.Polymorphism-this is nothing but same method name and diffent action is called as polymorphism
3.Encapsulation-Encapsulation is the process of binding data (variables) and methods (functions) that operate on that data into a single unit (class).
It also restricts direct access to some of the object’s internal data — a form of data protection.
4.Abstaction-it is same like encapsulation it shows only neccessary element remaining all are hides
*/

/*Inheritance:

class Animal {
   constructor(egg, child) {
      this.egg = egg;
      this.child = child;
   }

   dog() {
      console.log(`The dog is ${this.child}`);
   }
}

class Birds extends Animal {
   bird() {
      console.log(`The bird is ${this.egg}`);
   }
}

// Create object of child class to access both parent and child methods
let result = new Birds("it is egg", "it is child");

result.dog();   // from Animal
result.bird();  // from Birds
*/ 
/* Polymorphism
 class Animal {
   constructor(egg, child) {
      this.egg = egg;
      this.child = child;
   }

   dog() {
      console.log(`The dog is ${this.child}`);
   }
}

class Birds extends Animal {
   dog() {
      super.dog()
      console.log(`The bird is ${this.egg}`);
   }
}

let result = new Birds("it is egg", "it is child");
result.dog(); 
result.dog()
*/
/* Ecapsulation
class Bank{
   #bankbalance=0;
   constructor(pay){
      this.pay=pay
   }
   Gpay(){
     let bal=this.#bankbalance++
      console.log(`your payment  ${this.pay}acc`, bal)

   }
} 
let res=new Bank('gpay')
res.Gpay()
res.Gpay()
res.Gpay()
*/
/* Abstraction
class Bank {
  #bankbalance = 0;

  constructor(paymentType) {
    this.paymentType = paymentType;
  }

  // Abstract method to make a payment (hides internal logic)
  makePayment() {
    this.#processTransaction(); // user doesn’t see how this works
  }

  // Internal private method (abstraction + encapsulation)
  #processTransaction() {
    console.log(`Your payment method is ${this.paymentType}`);
    console.log(`Transaction no: ${this.#bankbalance++}`);
  }
}
*/
/* static
class Summa {
  static name = "dhiva";  // ✅ static class property

  pay() {
    console.log("the payment is gpay");
  }
}

console.log(Summa.name);  // Output: dhiva

let obj = new Summa();
obj.pay();                // Output: the payment is gpay
*/ 
