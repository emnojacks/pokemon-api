//DOM
//a representation of a window.document that comprises everything
//we see in the browser (and things we dont see such as head)

//DOM Node interface has subclasses of:
//document
//element
//document fragment

let h1 = document.createElement("h1");
h1.innerHTML = "Welcome";
h1.style.color = "whitesmoke";
h1.style.fontFamily = "sans-serif";

let rootText = document.getElementById("root-text");

let h2 = document.getElementById("element-methods");
//document.body.insertBefore(h1, h2);
//document.body.rootText.insertBefore(h1, h2);
document.body.appendChild(h1);
//where first and then what are we appending in parenthesis



let h3 = document.getElementById("id-method");
h3.style.color = "lightgray";

let p = document.getElementById("get-id");
p.innerText = "Method used to grab the first element with a specified id";

let myButton = document.getElementById("submit-btn");
myButton.innerHTML = "Click Me Now";
myButton.style.padding = "10px";
myButton.style.background = "lightblue";
myButton.style.color = "gray";
myButton.style.margin = "10px";

let everything = document.getElementsByTagName("*");
everything.style.padding = "20px";
//this selects everything but it's not working

//query selector grabs the first matching element that matches
//the selector it is looking for and stops


// .addEventListener creates an even and callback_function();

function createEventListener() {
    myButton.addEventListener("click", () => {
        console.log("Button has been clicked ")
    })
}

createEventListener();