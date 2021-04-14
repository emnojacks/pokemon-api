// APPlication programming interface

//an interface between two applications allow interactions btwn them without
// the use of abstract language

//two types of APIs
//--browser api
//built into the browser adnd abe to expose data from browser
//ex DOM API allowing us to style an html page, make popup windows, etc.
//--third party APIs
//require retrieval of their code from the web such as GoogleMaps API
//--object based have containers for the data in a JSON format

//HTTP requests
//defined set of request methods which indicate an action to be performmed
//REST - represenational state transfer 
//architectural style for stateless standard of communication
//GET retrieves resources by an ID 
//POST creates a new resource
//PUT updates a resource using an ID 
//DELETE removes specific resources using an ID


let cardImg = document.querySelector("body > div > div > div.card-img > img");
console.log(cardImg);
let name = document.querySelector(".name");
let ability = document.querySelector(".ability");
let generateBtn = document.querySelector(".submit-btn");
let weight = document.querySelector("body > div > div > div.card-body > div.paragraph > p > em > strong")

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //e is random just fyi
    //this queries the user input 
    let id = document.querySelector(".search-input").value;

    //this sends an https request using the id determined above 
    //fetch sends a get request to this API endpoint 
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //request 
        //res is response
        //then is a promise 
        .then(response => response.json()) // jsonifying it in case it's a big data set 
        //and se we can talk to it and so other things on the webpage while the response loads
        .then(data => {
            console.log(data)
            name.innerText = data.name;
            cardImg.src = data.sprites.front_shiny;
            ability.innerText = data.abilities[0].ability.name;
            weight.innerText = data.weight;
        })
})


async function getPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    //turns all that info into data variable
    const data = await response.json();
    //console.log(data)
    name.innerText = data.name;
    cardImg.src = data.sprites.front_shiny;
    ability.innerText = data.abilities[0].ability.name;
    weight.innerText = data.weight;
}

getPokemon();