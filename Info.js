const info = document.getElementById("Info")
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('custom-background1') 
});

info.addEventListener("click",() =>{;
    ShowGeolocation();
});
function ShowGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                info.innerHTML += `<br>Latitude: ${latitude}<br>Longitude: ${longitude}`;
            },     
        );
    } else {
        info.innerHTML += `<br>Geolocation is not supported by your browser.`;
    }
}