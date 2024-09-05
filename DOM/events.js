// Event handling
// let body=document.querySelector("body");
// let click=document.querySelector("button");
// click.onclick=()=>{
//     body.style.backgroundColor="green";   
// }
// click.onclick=(evt)=>{
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
//     body.style.backgroundColor="green";   
// }

// click.addEventListener("click",()=>{
//     console.log("button was clicked handler1");  
// })
// click.addEventListener("click",()=>{
//     console.log("button was clicked handler2");  
// })
// const handler3=()=>{
//     console.log("button was clicked handler3");  
// }
// click.addEventListener("click",handler3)
// click.addEventListener("click",()=>{
//     console.log("button was clicked handler4");  
// })
// click.removeEventListener("click",handler3);


/*create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again */

let body = document.querySelector("body");
let modeBtn = document.querySelector("button");
let curMode = "light";
modeBtn.addEventListener("click", () => {
    if (curMode === "light") {
        curMode = "dark";
        body.classList.add("dark");        
        body.classList.remove("light");
        modeBtn.innerText="click the LightMode";        

    } else {
        curMode = "light";
        body.classList.add("light");        
        body.classList.remove("dark"); 
        modeBtn.innerText="click the Darkmode"; 
         
    }
    console.log(curMode);
});