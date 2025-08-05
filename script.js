/*Error handling in JavaScript is used to detect and manage problems in code. If we know a line may cause an error, we use try...catch to stop the program from crashing. The try block runs the code, and if any error occurs, the catch block will handle it.

*/ 

function api(){
    try{
        let a;
        let b=10;
        console.log(a)
        console.log(b)

    }
    catch{
        console.log("it is error")
    }
}
api()