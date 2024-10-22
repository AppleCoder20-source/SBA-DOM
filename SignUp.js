
const signUpForm = document.getElementById("signUpForm");
signUpForm.style.display = "flex";
signUpForm.style.flexDirection = "column";
signUpForm.style.marginTop = "2%";

const form = document.getElementById("signUpForm")
//Loads color when entering webpage using DOMCOntent Loaded
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('custom-background') //referenced MDN docs for this
});

//Check to see if User signed up, if so we will send an alert saying Success you have signed up 
//add an event feature to track and to send alert via BOM window

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Get the form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    if (name && email && password) {
        window.alert("Success! You have filled out your information! We will get back to you shortly!");
}});

