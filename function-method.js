/*
Function methods:Function methods are like tools we use to control how a function runs, especially to control the this value.”

            Three types of Functions:

                1.CAll()
                2.Apply()
                3.Bind()




*/ 
// call method
/*let ProductOne={
    Mobile:"saamsung",
    Ram:"512 gb",
    processor:"snapdragonn",
    
    }
otherDetails=function(a){
        console.log(`this is the mobile ${this.Mobile} the rate of the mobile ${a}`)
}
otherDetails.call(ProductOne,23000)
*/
/*  let ProductOne={
    Mobile:"saamsung",
    Ram:"512 gb",
    processor:"snapdragonn",
    
    }
otherDetails=function(a,b){
        console.log(`this is the mobile ${this.Mobile} the rate of the mobile ${a}, the launch date is ${b}`)
}
let arr=[12000,"jan"]
let[...array]=arr
otherDetails.apply(ProductOne,array)

*/
let ProductOne={
    Mobile:"saamsung",
    Ram:"512 gb",
    processor:"snapdragonn",
    
    }
otherDetails=function(a,b){
        console.log(`this is the mobile ${this.Mobile},${this.Ram} the rate of the mobile ${a}, the launch date is ${b}`)
}

let binded=otherDetails.bind(ProductOne,"23000","jan")
binded()



