import { drawData } from "./drawData.js";
import data from "./fetchData.js";

const dataSet = new Set();
dataSet.add(data);

const modal = document.querySelector(".modal");
const edit = document.querySelector(".edit-projects");
const xmark = document.querySelector(".xmark");
const container = document.querySelector(".container");
const button = document.querySelector(".button-modal");
const title = document.querySelector(".title-modal");

const removeChild = (container) => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
};
const createGallery = () => {
    removeChild(container);
    drawData(dataSet, container);
    container.className = "container gallery-modal";
    title.innerHTML = "Galerie photo";
    button.innerHTML = "Ajouter une photo";
};

const createAddPhoto = () => {
    removeChild(container);
    container.className = "container add-photo-modal";
    title.innerHTML = "Ajout photo";
    button.innerHTML = "Valider";

    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    const titleLabel = document.createElement("label");
    titleLabel.innerHTML = "Titre";
    const categoryLabel = document.createElement("label");
    categoryLabel.innerHTML = "Categorie";
    const titleInput = document.createElement("input");
    const categorySelect = document.createElement("select");
    const options = ["Objets", "Appartements", "Hôtels et restaurants"];

    container.appendChild(imgContainer);
    container.appendChild(titleLabel);
    container.appendChild(titleInput);
    container.appendChild(categoryLabel);

    for (let i in options) {
        const opt = document.createElement("option");
        opt.value = options[i];
        opt.text = options[i];
        categorySelect.add(opt, null);
    }
    container.appendChild(categorySelect);
};
xmark.addEventListener("click", () => {
    modal.style.display = "none";
});

edit.addEventListener("click", () => {
    createGallery();
    modal.style.display = "flex";
});

button.addEventListener("click", () => {
    createAddPhoto();
});
