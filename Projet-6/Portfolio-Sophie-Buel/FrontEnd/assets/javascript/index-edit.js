import { drawGallery, drawAddPhoto, deletePhoto } from "./drawData.js";
import { fetchData } from "./fetchData.js";

const url = "http://localhost:5678/api/works";

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

//Event edit button on edit page
edit.addEventListener("click", () => {
    drawGallery(container, title, button, dataSet);
    modal.style.display = "flex";
    const deleteButtons = document.querySelectorAll(".trashCan");
    deletePhoto(deleteButtons);
});

//Event arrow button in modal
arrow.addEventListener("click", () => {
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Can't fetch data");
            }
            return res.json();
        })
        .then((data) => {
            dataSet.clear();
            dataSet.add(data);
            drawGallery(container, title, button, dataSet);
            const deleteButtons = document.querySelectorAll(".trashCan");
            deletePhoto(deleteButtons);
            arrow.style.display = "none";
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
});

//Event button add photo in modal
button.addEventListener("click", () => {
    drawAddPhoto(container, title, button);
    arrow.style.display = "block";
});

//Event button xmark in modal
xmark.addEventListener("click", () => {
    modal.style.display = "none";

    fetchData(dataSet, gallery, "Tous");
});

//Event click outside modal
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";

        fetchData(dataSet, gallery, "Tous");
    }
});
