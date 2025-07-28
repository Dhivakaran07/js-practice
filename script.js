/* fetch is used to make requests to APIs or other external resources.
It returns a Promise. We use `.then()` to handle the response and 
process the data. If there's an error during the fetch, `.catch()` 
is used to handle the error.


Promises which is used to to operate the asynchrnouns code and then it gives correct element and the wrong element in catch
*/

//  Fetch data

fetch('https://dummyjson.com/products').then((res) => {
    return res.json();
}).then((data) => data.products.forEach((produc, index) => {
    console.log(index + "=>" + produc.title)
})).catch((error) => console.log("error", error))


// promises
function promised() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let Institute = false;
            if (Institute) {
                resolve("he is presented")
            }
            else {
                reject("it is not print")
            }
        }, 5000);

    });
}
promised().then((result) => {
    console.log("anser", result)
}).catch((op) => {
    console.log("error", op)
})
