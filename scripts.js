// first method to create our without html use js we create our practice with project

const { createElement } = require("react");

let CarName=[
  {
    imgUrl: "https://hips.hearstapps.com/hmg-prod/images/future-cars-679d3400f197f.jpg?crop=1.00xw:0.899xh;0,0.0575xh&resize=1200:*",
    "Title":"benz",
    "price":2000000,
    "discount":30000,
    "roadtax":"10%"
  },

  {
    imgUrl: "https://hips.hearstapps.com/hmg-prod/images/future-cars-679d3400f197f.jpg?crop=1.00xw:0.899xh;0,0.0575xh&resize=1200:*",
    Title:"benz",
    price:2000000,
    discount:30000,
    roadtax:"10%"
  },

  {
    imgUrl: "https://hips.hearstapps.com/hmg-prod/images/future-cars-679d3400f197f.jpg?crop=1.00xw:0.899xh;0,0.0575xh&resize=1200:*",
    Title:"benz",
    price:2000000,
    discount:30000,
    roadtax:"10%"
  },
   
  {
    imgUrl: "https://hips.hearstapps.com/hmg-prod/images/future-cars-679d3400f197f.jpg?crop=1.00xw:0.899xh;0,0.0575xh&resize=1200:*",
    Title:"benz",
    price:2000000,
    discount:30000,
    roadtax:"10%"
  }


];

// to string we create a page

/*let whole="<section>"
for(i=0;i<CarName.length;i++){
    whole+="<figure>"
    whole+="<img src="+CarName[i].imgUrl+"alt='car'/>"
    whole+="<figcaption>"+CarName[i].Title+"</figcaption>"
    whole+="<figcaption>"+CarName[i].price+"</figcaption>"
    whole+="<figcaption>"+CarName[i].discount+"</figcaption>"
    whole+="<figcaption>"+CarName[i].roadtax+"</figcaption>"
    whole+="</figure>"
}
whole+="</section>"
document.write(whole)
*/
// backtics jason data
/*let whole="<section>"
for(i=0;i<CarName.length;i++){
    whole+=`<figure>
    <img src=${CarName[i].imgUrl} alt='car'/>
    <figcaption>${CarName[i].Title} </figcaption>
    <figcaption>${CarName[i].price} </figcaption>
    <figcaption>${CarName[i].discount} </figcaption>
    <figcaption>${CarName[i].roadtax} </figcaption>
    </figure>`
}
whole+="</section>"
document.write(whole)
*/

// creating a html with use of dom
/*
let ParentElement=document.createElement('section')
let figureElement=document.createElement('figure')
let imgElement=document.createElement('img')
imgElement.setAttribute('src',"https://hips.hearstapps.com/hmg-prod/images/future-cars-679d3400f197f.jpg?crop=1.00xw:0.899xh;0,0.0575xh&resize=1200:*")
imgElement.setAttribute('alt','car')
let figcaption1=document.createElement('figcaption')
let element1=document.createTextNode(`title:'benz'`)
figcaption1.appendChild(element1)
let figcaption2=document.createElement('figcaption')
let element2=document.createTextNode(`title:'benz'`)
figcaption2.appendChild(element2)
let figcaption3=document.createElement('figcaption')
let element3=document.createTextNode(`title:'benz'`)
figcaption3.appendChild(element3)
figureElement.appendChild(imgElement)
figureElement.appendChild(figcaption1)
figureElement.appendChild(figcaption2)
figureElement.appendChild(figcaption3)
ParentElement.appendChild(figureElement)
document.body.appendChild(ParentElement)
*/
/*let imgElement = document.createElement('img');
imgElement.setAttribute('src', 'https://cdn.motor1.com/images/mgl/0ANZJ/s1/future-cars.jpg');
imgElement.setAttribute('alt', 'car');
imgElement.style.width = "300px"; // Make it visible

// Captions
let figcaption1 = document.createElement('figcaption');
figcaption1.textContent = "Title: Benz";

let figcaption2 = document.createElement('figcaption');
figcaption2.textContent = "Type: Sedan";

let figcaption3 = document.createElement('figcaption');
figcaption3.textContent = "Year: 2025";

// Append elements
figureElement.appendChild(imgElement);
figureElement.appendChild(figcaption1);
figureElement.appendChild(figcaption2);
figureElement.appendChild(figcaption3);

ParentElement.appendChild(figureElement);
document.body.appendChild(ParentElement);
*/



  const input = document.getElementById("inputBox");
  const status = document.getElementById("status");

  input.addEventListener("keydown", function(event) {
    status.textContent = "Key DOWN: " + event.key
  });

  input.addEventListener("keyup", function(event) {
    status.textContent = "Key UP: " + event.key
  });








