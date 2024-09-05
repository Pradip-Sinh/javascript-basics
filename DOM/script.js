// let header= document.getElementById("heading");// selecting with id
// console.dir(header);

// let myclass= document.getElementsByClassName("myClass");// selecting with class name
// console.log(myclass);
// let tag= document.getElementsByTagName("h1");// selecting with Tag name
// console.dir(tag);

// Using querySelector it will return  return node list
// let myclass= document.querySelector("div");
//  console.dir(myclass.innerText);


/* Ques: create H2 heading element with text "hello javascript ". Append "from Apna college student "
to this text using Js.

let heading = document.querySelector("h2");

heading.innerText = heading.innerText + " from apna college stduent";*/

/* create 3 divs with class name - "box" Access them & add some unique text to each of them 

let divs = document.querySelectorAll(".box");
let idx = 1;
for (div of divs) {
    div.innerText=`new Unique value ${idx}`;
    idx++;
}*/

/* practice que: create a new button element .give in text "click me",background color red & textcolor of white.
 insert the button as the first element isndie the body tag.*/

let newBtn=document.createElement("button");
newBtn.innerText= "Click me";
newBtn.style.color= "white";
newBtn.style.backgroundColor= "red";
document.querySelector("body").prepend(newBtn);

// appendChile ()Method use

let fragment= document.createDocumentFragment();//create new empty documentfragment
let li= fragment
    .appendChild(document.createElement("div"))
    .appendChild(document.createElement("ul"))
    .appendChild(document.createElement("li"));
    li.innerText= "hello!";

document.body.appendChild(fragment);
console.dir(fragment);








// let pragraph= document.div.appendChild(document.createElement("p"));
// pragraph.innerText= "use of  appendChild () method";
// console.log(pragraph);







