import { drawGallery, drawAddPhoto, deletePhoto } from "./drawData.js";
import { fetchData } from "./fetchData.js";

const modal = document.querySelector(".modal");
const gallery = document.querySelector(".gallery");
const container = document.querySelector(".container");
const arrow = document.querySelector(".arrow-left");
const xmark = document.querySelector(".xmark");
const title = document.querySelector(".title-modal");
const button = document.querySelector(".button-modal");
const edit = document.querySelector(".edit-projects");

const dataSet = new Set();

fetchData(dataSet, gallery, "Tous");

edit.addEventListener("click", () => {
    drawGallery(container, title, button, dataSet);
    modal.style.display = "flex";
    const deleteButtons = document.querySelectorAll(".trashCan");
    deletePhoto(deleteButtons);
});

arrow.addEventListener("click", () => {
    drawGallery(container, title, button, dataSet);
    arrow.style.display = "none";
});

button.addEventListener("click", () => {
    drawAddPhoto(container, title, button);
    arrow.style.display = "block";
});

xmark.addEventListener("click", () => {
    modal.style.display = "none";

    fetchData(dataSet, gallery, "Tous");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        
    fetchData(dataSet, gallery, "Tous");
    }
});
