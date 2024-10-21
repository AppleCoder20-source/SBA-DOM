
const signUpForm = document.getElementById("signUpForm");
signUpForm.style.display = "flex";
signUpForm.style.flexDirection = "column";
signUpForm.style.marginTop = "2%";
//Loads color when entering webpage using DOMCOntent Loaded
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('custom-background') 
});

//Check to see if User signed up, if so we will send an alert saying Success you have signed up 