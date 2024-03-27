const TheButton = document.querySelector("button")
const TheImage = document.querySelector("img");
TheButton.onclick = () => {
    const ImgSrc = TheImage.getAttribute("src");
    if (ImgSrc === "images/cat.png"){
        TheImage.setAttribute("src", "images/rick.gif")
        TheButton.textContent = "No, it\'s Rick!"
    } else {
        TheImage.setAttribute("src", "images/cat.png")
        TheButton.textContent = "Is it a cat?"
    }
}