/*


async is use to returns the promises 
awit is use to it waits when promises print then it is print


*/ 
 
// it is nested function
function later(){
  return new Promise((resolve)=>{
  setTimeout(()=>{
  let discussion=true;
  if(discussion){
  resolve("it is successfull")
  }
  },3000)
})};
 async function after(){
  console.log("what is the discusion")
  let result= await later()
  console.log(result)
  console.log("the discussion is finished")
}
after()

// without nested we have to nested we use

async function nonest(){
 let result= await new   Promise((resolve=>{
    discussion=true;
    if(discussion){
    resolve("it is succes")
  
    }
  }))
    console.log(result)
}
nonest()
