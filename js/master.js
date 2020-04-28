
//declaring a variable and selecting the form from contact.html
const form = document.querySelector(".form");

//declaring all message variables and selecting the div which contain the message.
const formPassed = document.querySelector(".form-passed");
const firstNameError = document.querySelector(".form-error-name");
const lastNameError = document.querySelector(".form-error-last-name");
const emailError = document.querySelector(".email-error");
const invalidEmailError = document.querySelector(".invalid-email-error");
const messageError = document.querySelector(".message-error");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    //prevent reloading of the page
    event.preventDefault();

    //calling the rest of the validation functions
    validateFirstName();
    validateLastName();
    validateEmail();
    validateTextarea();
    validationPassed();    
};

function validateFirstName(){
    const firstName = document.querySelector(".first-name");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    } 
}

function validateLastName(){
    const lastName = document.querySelector(".last-name");
    const lastNameValue = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    } 
}

function validateEmail(){
    const email = document.querySelector(".email");
    const emailValue = email.value;

    if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
    } else {
    emailError.style.display = "block";
    }

    if (validateEmailAdress(emailValue) === true) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

}


function validateTextarea(){
    const message = document.querySelector(".message");
    const messageValue = message.value;

    if (TextareaInputLength(messageValue) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    } 
}


function validateEmailAdress(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function checkInputLength(value) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is greater than 0 return true
    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function TextareaInputLength(value) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is equal or greater than 10 return true
    if (trimmedValue.length >= 10) {
        return true;
    } else {
        return false;
    }
}


function validationPassed(){
    const conditionArray =[
        //storing all conditions which must be met in an array
        firstNameError.style.display === "none",
        lastNameError.style.display ==="none",
        emailError.style.display === "none",
        invalidEmailError.style.display === "none",
        messageError.style.display === "none"

    ];
    //Checks if conditionArray has any occurrences of false within its array. This method returns -1 if the value to search for never occurs.
    if (conditionArray.indexOf(false) === -1) {
        formPassed.style.display = "block";
    } else {
        formPassed.style.display = "none";
    }
}
