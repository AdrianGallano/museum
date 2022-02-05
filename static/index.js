let speed = 100;
let text;
let i = 0;

setTimeout(getVisitorName(), 200000)
setTimeout(typeWriter(), 200000)

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 9){
        e.preventDefault()
        let tabs = document.getElementsByClassName("tabs")
        
        Array.from(tabs).forEach(element => element.style.display = "inline")
    }
})

async function getVisitorName(){
    let visitorName = prompt("Enter your name:") + "!"
    text = visitorName.toUpperCase()[0] + visitorName.slice(1);
};

async function typeWriter(){
    if(i < text.length){
        document.getElementsByClassName("welcome-text")[0].innerText += text.charAt(i)
        i++;
        setTimeout(typeWriter, speed);
    }
}