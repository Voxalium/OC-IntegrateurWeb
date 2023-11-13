import { fetchData } from "./fetchData.js";
import { drawGallery, drawAddPhoto, deletePhoto } from "./drawData.js";

let token = localStorage.getItem("token");

const url = "http://localhost:5678/api/works";

const modal = document.querySelector(".modal");
const gallery = document.querySelector(".gallery");
const container = document.querySelector(".container");
const arrow = document.querySelector(".arrow-left");
const xmark = document.querySelector(".xmark");
const title = document.querySelector(".title-modal");
const button = document.querySelector(".button-modal");
const edit = document.querySelector(".edit-projects");
const editMode = document.querySelector(".edit-mode");
const login = document.querySelector("#login");
document.querySelector("#projets").style.fontWeight = "900";
const dataSet = new Set();
const filters = document.querySelector(".filters");
fetchData(dataSet, gallery, "Tous");

//Connexion
token ? connexion() : null;

function connexion() {
    filters.style.display = "none";
    edit.style.display = "flex";
    editMode.style.display = "flex";
    login.innerText = "logout";
    login.addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "../../login.html";
        filters.style.display = "flex";
        edit.style.display = "none";
    });
}

//Event for filters
filters.addEventListener("click", (e) => {
    const filter = e.target.id;
    const buttons = document.querySelectorAll(".button");
    const isFilter = e.target.className === "filters";

    if (!isFilter) {
        buttons.forEach((button) => {
            button.classList.remove("button-selected");
        });
        e.target.classList.add("button-selected");
        fetchData(dataSet, gallery, filter);
    }
});

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
