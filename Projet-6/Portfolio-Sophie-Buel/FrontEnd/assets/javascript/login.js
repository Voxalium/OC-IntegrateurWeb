import { loginSubmit } from "./request.js";
document.querySelector('#login').style.fontWeight="900"
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", loginSubmit);
