const info = document.getElementById("Info")
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('custom-background1') 
});

info.addEventListener("click",() =>{;
    Screens();
});
function Screens() {
    const screenWidth = screen.availWidth;
    const screenHeight = screen.availHeight;
    info.innerHTML = `Available Screen Height: ${screenHeight}px and Available Screen Width is ${screenWidth}`;
}