let speed = 100;
let text;
let i = 0;

setTimeout(getVisitorName(), 50)
setTimeout(typeWriter(), 50)

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 9){
        e.preventDefault()
        let tabs = document.getElementsByClassName("tabs")
        document.getElementsByClassName("press-tab")[0].style.display = "none"
        
        Array.from(tabs).forEach(element => element.style.display = "inline")
    }
})

async function getVisitorName(){
    let visitorName = prompt("Enter your name:") + "!"
    if(visitorName === "!"){
        text = "Stranger!"
    }else{
        text = visitorName.toUpperCase()[0] + visitorName.slice(1);
    }
};

async function typeWriter(){
    if(i < text.length){
        document.querySelectorAll(".welcome-text > p")[1].textContent += text[i]
        i++;
        setTimeout(typeWriter, speed);
    }
}


// HEADER DONE