import * as ui from "./ui.js";
import * as req from "./request.js";
//Request delete

//Draw data
export const drawData = (data, container) => {
    removeChild(container);
    for (let i of data.keys().next().value) {
        const id = document.createElement("span");
        const fig = document.createElement("figure");
        const img = document.createElement("img");
        const fc = document.createElement("figcaption");
        const tc = document.createElement("img");

        id.innerHTML = i.id;
        id.style.display = "none";
        tc.className = "trashCan";
        tc.src = "assets/icons/trash-can-solid.png";

        img.src = i.imageUrl;
        fc.innerHTML = i.title;
        fig.appendChild(id);
        fig.appendChild(img);
        fig.appendChild(fc);
        fig.appendChild(tc);
        container.appendChild(fig);
    }
};

//Remove child inside container
const removeChild = (container) => {
    container.innerHTML = "";
};

//Draw gallery
export const drawGallery = (container, title, button, dataSet) => {
    removeChild(container);
    drawData(dataSet, container);
    container.className = "container gallery-modal";
    title.innerHTML = "Galerie photo";
    button.innerHTML = "Ajouter une photo";
    button.style.display = "flex";
};

//Draw AddPhoto
export const drawAddPhoto = (container, title, button) => {
    removeChild(container);
    container.className = "container add-photo-modal";
    title.innerHTML = "Ajout photo";
    button.style.display = "none";
    // Create and append form
    const addForm = ui.createForm();
    container.appendChild(addForm);

    // Create and append image container
    const imgContainer = ui.createImageContainer();
    addForm.appendChild(imgContainer);

    // Create and append input elements
    addForm.appendChild(ui.createLabel("Titre"));
    addForm.appendChild(ui.createInput("text", "titleInput"));
    addForm.appendChild(ui.createLabel("Categorie"));
    addForm.appendChild(ui.createSelect());
    addForm.appendChild(ui.createSubmitButton());
    addForm.appendChild(ui.createInfo());

    const inputFile = ui.createInput("file", "add-image");
    inputFile.style.display = "none";
    inputFile.accept = "image/*";
    addForm.appendChild(inputFile);

    // Add event listeners
    const addImage = imgContainer.querySelector(".add-photo-image");
    const addButton = imgContainer.querySelector(".add-photo-button");
    const addText = imgContainer.querySelector(".add-photo-text");

    inputFile.addEventListener("change", () => {
        const file = inputFile.files[0];
        if (file) {
            const rd = new FileReader();
            rd.onload = (e) => {
                addImage.src = e.target.result;
                addButton.style.display = "none";
                addText.style.display = "none";
                addImage.style.height = "100%";
            };
            rd.readAsDataURL(file);
        }
    });
    addButton.addEventListener("click", () => {
        inputFile.click();
    });

    const titleInput = document.querySelector("#titleInput");
    titleInput.addEventListener("input", ui.validateForm);
    inputFile.addEventListener("change", ui.validateForm);
    addForm.addEventListener("submit", req.addDb);
};

export function deletePhoto(deleteButtons) {
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
            const img = deleteButton.parentElement;
            img.remove();
            const id = deleteButton.parentElement.childNodes[0].innerHTML;
            req.deleteDb(id);
        });
    });
}

export function drawPreview() {
    const addImage = document.querySelector(".add-photo-image");
    const addButton = document.querySelector(".add-photo-button");
    const addText = document.querySelector(".add-photo-text");
    const imageInput = document.querySelector("#add-image");
    const titleInput = document.querySelector("#titleInput");
    addButton.style.display = "flex";
    addText.style.display = "flex";
    addImage.src = "../../assets/icons/addphoto.png";
    titleInput.value = "";
    imageInput.value = "";
    submitButton.style.backgroundColor = "#1d6154";
}
