let firstname =document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let submitBtn = document.querySelector("#submit");
let inputFields = document.querySelectorAll(".form-control");

let fnameError = document.getElementById("fname-error");
let lnameError = document.getElementById("lname-error");
let emailError = document.getElementById("email-error");

let fnamesuccess = {
    removeError: function() {
        fnameError.classList.remove("error");
    },
    addSuccess: function() {
        fnameError.classList.add("success");
    },
    setText: function(text) {
        fnameError.textContent = text;
    }
};
let lnamesuccess = {
    removeError: function() {
        lnameError.classList.remove("error");
    },
    addSuccess: function() {
        lnameError.classList.add("success");
    },
    setText: function(text) {
        lnameError.textContent = text;
    }
};
let emailsuccess = {
    removeError: function() {
        emailError.classList.remove("error");
    },
    addSuccess: function() {
        emailError.classList.add("success");
    },
    setText: function(text) {
        emailError.textContent = text;
    }
};


let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let nameValid = false;
let emailValid = false;

window.onload = function(){
    firstname.focus();
}

document.forms[0].onsubmit = function ContactValidation(f){

    if(firstname.value !== "" && firstname.value.length >= 3){
        nameValid = true;
        inputFields[0].classList.remove("invalid");
        inputFields[0].classList.add("valid");
        fnamesuccess.removeError();
        fnamesuccess.addSuccess();
        fnamesuccess.setText("First name looks good!");
    } else {
        f.preventDefault();
        fnameError.textContent = "First name must be more than 3 characters.";
    }
    if(lastname.value !== "" && lastname.value.length >= 3){
        nameValid = true;
        inputFields[1].classList.remove("invalid");
        inputFields[1].classList.add("valid");
        lnamesuccess.removeError();
        lnamesuccess.addSuccess();
        lnamesuccess.setText("Last name looks good!");
    } else {
        f.preventDefault();
        lnameError.textContent = "Last name must be more than 3 characters.";
    }


    if(email.value.match(emailPattern)){
        emailValid = true;
        inputFields[2].classList.remove("invalid");
        inputFields[2].classList.add("valid");
        emailsuccess.removeError();
        emailsuccess.addSuccess();
        emailsuccess.setText("Email looks good too!");
        
    } else {
        f.preventDefault();
        emailError.textContent = "Please enter a valid email address.";
    }
};

