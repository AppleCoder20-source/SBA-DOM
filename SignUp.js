const signUpForm = document.getElementById("signUpForm");
signUpForm.style.display = "flex";
signUpForm.style.flexDirection = "column";
signUpForm.style.marginTop = "2%";

document.addEventListener("DOMContentLoaded", handlePageLoad);
signUpForm.addEventListener("submit", handleFormSubmit);

//Referecned W3 Schools and MDN for blur
const inputs = document.querySelectorAll("#signUpForm input");
inputs.forEach(input => {
    input.addEventListener("blur", handleInputBlur);
});

function handlePageLoad() {
    document.body.classList.add('custom-background'); 
}
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value();
    const email = document.getElementById("email").value();
    const password = document.getElementById("pass").value();

    window.alert(`Success! You have filled out your information ${name}, your email is ${email} and password is ${password}!  We will get back to you shortly!`);
}

// Event handler function, whenever user submits without filling out form, red color will appear
function handleInputBlur(event) {
    const input = event.target;

    if (!input.value.trim()) {
        input.style.borderColor = "red"; 
        window.alert(`The ${input.name} field cannot be empty.`); 
    } else  {
        input.style.borderColor = ""; 
    }
}
