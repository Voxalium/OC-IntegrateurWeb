import { createGallery, createAddPhoto } from "./drawData.js";
import data from "./fetchData.js";

const dataSet = new Set();
dataSet.add(data);

const modal = document.querySelector(".modal");
const edit = document.querySelector(".edit-projects");
const xmark = document.querySelector(".xmark");
const arrow = document.querySelector(".arrow-left");
const container = document.querySelector(".container");
const button = document.querySelector(".button-modal");
const title = document.querySelector(".title-modal");
xmark.addEventListener("click", () => {
    modal.style.display = "none";
});

edit.addEventListener("click", () => {
    createGallery(container, title, button, dataSet);
    modal.style.display = "flex";
});

button.addEventListener("click", () => {
    createAddPhoto(container, title, button);
    arrow.style.display = "block";
});

arrow.addEventListener("click", () => {
    createGallery(container, title, button, dataSet);
    arrow.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
