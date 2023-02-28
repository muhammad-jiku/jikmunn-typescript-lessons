"use strict";
const userForm = document.querySelector(".userForm");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userCountry = document.querySelector("#userCountry");
const userFeedback = document.querySelector("#userFeedback");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value,
    };
    console.log(data);
});
