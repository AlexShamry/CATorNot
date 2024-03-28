const TheButton = document.querySelector("button");
const Welcome = document.querySelector("h1");
const ChangeButton = document.getElementById("change");
function setUserName(){
    let myName = prompt("Please, enter your name!");
    if(!myName){
        setUserNameArg("user")
    }
    else {
        localStorage.setItem("name", myName);
        Welcome.textContent = `welcome, ${myName}!`;
    }
}
function setUserNameArg(name){
    localStorage.setItem("name", name);
    Welcome.textContent = `welcome, ${name}!`;
}
if(!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    Welcome.textContent = `Welcome, ${storedName}!`;
}
TheButton.onclick = () => {
    const TheImage = document.querySelector("img");
    const ImgSrc = TheImage.getAttribute("src");
    if (ImgSrc === "images/cat.png"){
        TheImage.setAttribute("src", "images/rick.gif")
        TheButton.textContent = "No, it\'s Rick!"
    } else {
        TheImage.setAttribute("src", "images/cat.png")
        TheButton.textContent = "Is it a cat?"
    }
}
ChangeButton.onclick = () => {
    setUserName()
}
