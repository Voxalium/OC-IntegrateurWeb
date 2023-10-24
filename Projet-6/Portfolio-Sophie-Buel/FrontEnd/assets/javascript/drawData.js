//Draw data from fetch

export const drawData = (data, container) => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    for (let i of data.keys().next().value) {
        const fig = document.createElement("figure");
        const img = document.createElement("img");
        const fc = document.createElement("figcaption");
        const tc = document.createElement("img");
        tc.className = "trashCan";
        tc.src = "assets/icons/trash-can-solid.png";

        img.src = i.imageUrl;
        fc.innerHTML = i.title;
        fig.appendChild(img);
        fig.appendChild(fc);
        fig.appendChild(tc);
        container.appendChild(fig);
    }
};

//Remove child inside container
export const removeChild = (container) => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
};

//Draw data from fetch inside container
export const createGallery = (container, title, button, dataSet) => {
    removeChild(container);
    drawData(dataSet, container);
    container.className = "container gallery-modal";
    title.innerHTML = "Galerie photo";
    button.innerHTML = "Ajouter une photo";

    const deleteButtons = document.querySelectorAll(".trashCan");

    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
            const img = deleteButton.parentElement;
            img.remove();
        });
    });
};

export const createAddPhoto = (container, title, button) => {
    removeChild(container);
    container.className = "container add-photo-modal";
    title.innerHTML = "Ajout photo";
    button.innerHTML = "Valider";

    // Create and append form
    const addForm = createForm();
    container.appendChild(addForm);

    // Create and append image container
    const imgContainer = createImageContainer();
    addForm.appendChild(imgContainer);

    // Create and append input elements
    addForm.appendChild(createLabel("Titre"));
    addForm.appendChild(createInput("text", "titleInput"));
    addForm.appendChild(createLabel("Categorie"));
    addForm.appendChild(createSelect());
    addForm.appendChild(createSubmitButton());

    const inputFile = createInput("file", "add-image");
    inputFile.accept = "image/*";
    inputFile.style.display = "none";

    addForm.appendChild(inputFile);

    // Add event listeners
    const addImage = imgContainer.querySelector(".add-photo-image");
    const addButton = imgContainer.querySelector(".add-photo-button");
    const addText = imgContainer.querySelector(".add-photo-text");

    addButton.addEventListener("click", () => {
        inputFile.click();
    });

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
};

function createForm() {
    const form = document.createElement("form");
    form.setAttribute("id", "modalForm");
    return form;
}
function createImageContainer() {
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    imgContainer.innerHTML = `
        <img class="add-photo-image" src="../../assets/icons/addphoto.png">
        <span class="add-photo-button">+ Ajouter photo</span>
        <p class="add-photo-text">jpg, png : 4mo max</p>
    `;
    return imgContainer;
}
function createLabel(text) {
    const label = document.createElement("label");
    label.innerHTML = text;
    return label;
}
function createInput(type, id) {
    const input = document.createElement("input");
    input.type = type;
    input.setAttribute("id", id);
    input.required = true;
    return input;
}
function createSelect() {
    const select = document.createElement("select");
    const options = ["Objets", "Appartements", "Hôtels et restaurants"];
    select.required = true;

    for (let option of options) {
        const opt = document.createElement("option");
        opt.value = option;
        opt.text = option;
        select.add(opt);
    }
    return select;
}
function createSubmitButton() {
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.style.display = "none";
    return submitButton;
}
