const info = document.getElementById("Info")
document.addEventListener("DOMContentLoaded", handlePageLoad);

function handlePageLoad() {
    document.body.classList.add('custom-background1'); 
}

info.addEventListener("click",() =>{;
    Screens();
    NodeMapping();
});

function Screens() {
    const screenWidth = screen.availWidth;
    const screenHeight = screen.availHeight;
    info.innerHTML = `Available Screen Height: ${screenHeight}px and Available Screen Width is ${screenWidth}`;
}

function NodeMapping() {
    const Parent = info.parentNode //get div content entirely 
    const FirstChild = Parent.firstElementChild
    FirstChild.innerHTML = "<h4> Location Information has been sent successfully!</h4>";
       
}

