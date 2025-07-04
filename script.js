/* function are used to call back and reusabilty*/
/*1.function decalaration
  2.function with parameter
  3.function with return
  4,function with default
  */
//  1.function decalaration

function decalaration(){
    let a=10;
    let b=20;
    console.log(a+b)
}
decalaration()

//   2.function with parameter

function parameters(a,b)
{
    console.log(a+b)
}
parameters(10,20)

//   3.function with return

function resturns(a,b)
{
    return a+b
    // return b     in this case we use only one time
}
let res=resturns(10,333)  /*in this case we store also one variable non retrun we does not do this*/
console.log(res)

//  4,function with default

function defaullt(a,b=20){
    console.log(a+b)
}
defaullt(2)