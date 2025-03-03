import axios from "axios"; 
import breeds from "./breeds";
// 👉 TASK 1- Test out the following endpoints:

//  https://dog.ceo/api/breeds/image/random

//  * With Firefox and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector(".entry");


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  // instantiating the elements

  const dogCard = document.createElement("div");
  const dogImg = document.createElement("img");
  const heading = document.createElement("h3");

dogCard.classList.add("dog-card");
dogImg.classList.add("dog-image")

heading.textContent = `Breed: ${breed}`;
dogImg.src = imageURL;  

  dogCard.appendChild(dogImg);
  dogCard.appendChild(heading);

dogCard.addEventListener("click", () => {
  dogCard.classList.toggle("selected");
})

return dogCard;
  /*
    <div class="dog-card">
      <img class="dog-image">
      <h3></h3>
    </div>
  */
  // set class names, attributes and text

  // create the hierarchy

  // add some interactivity


  // never forget to return!
}

dogCardMaker({imageURL: "Blah.com", breed: "ugh"});


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file


function makeDogCards(selector) {
  const entryPoint = document.querySelector(selector);
axios.get("https://dog.ceo/api/breed/bulldog/images/random/3")
.then(responseVariable => {
console.log(responseVariable.data.message);
responseVariable.data.message.forEach(image => {
  const dogCard = dogCardMaker({imageURL: image, breed: "bulldog"})
  entryPoint.appendChild(dogCard);
})
})
.catch(error => {
  console.error(error);
})
.finally( () => {
  console.log("it's working");
  })
}

document.querySelector("button").addEventListener("click", () => {
document.querySelector(".entry").innerHTML ="";
  makeDogCards(".entry")
})


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console


// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// and loop over them, fetching a dog at each iteration

//import breeds from external data source

//loop over the breeds array 

breeds.forEach(breed => {
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random/3`)
  .then(res => {
    res.data.message.forEach(image => {
      const dogCard = dogCardMaker({ imageURL: image, breed: breed });
      document.querySelector(".entry").appendChild(dogCard);
    })
  }).catch(err => console.error(err))
  })
