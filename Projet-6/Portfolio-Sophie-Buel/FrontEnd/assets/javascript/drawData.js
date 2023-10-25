//Request delete
const token = localStorage.getItem("token");
const url = "http://localhost:5678/api/works/";

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
};

//Draw AddPhoto
export const drawAddPhoto = (container, title, button) => {
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

    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
    });
    button.addEventListener("click", () => {
        submitButton.click();
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
    submitButton.style.height = "16px";
    submitButton.setAttribute("id", "submit");
    return submitButton;
}

export function deletePhoto(deleteButtons) {
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
            const img = deleteButton.parentElement;
            img.remove();
            const id = deleteButton.parentElement.childNodes[0].innerHTML;
            deleteDb(id);
        });
    });
}
function addDb(id, title, imgUrl, category) {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("imageUrl", imgUrl);
    formData.append("categoryId", category);
    formData.append("userId", 0);

    const req = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    };
    const info = document.querySelector("#info");
    info.innerHTML = "";
    fetch(formData, req)
        .then((res) => {
            if (res.status === 201) {
                info.innerHTML = "Données envoyées avec succès";
                return res.json();
            } else if (res.status === 400) {
                console.error("Bad Request");
                throw new Error("Mauvaise requête");
            } else if (res.status === 401) {
                console.error("Unauthorized");
                throw new Error("Non autorisé");
            } else {
                console.error("Unexpected error");
                throw new Error("Erreur inattendu");
            }
        })
        .catch((error) => {
            info.innerHTML = error.message;
        });
}

function deleteDb(id) {
    const req = {
        method: "DELETE",
        headers: {
            accept: "*/*",
            Authorization: `Bearer ${token}`,
        },
    };
    fetch(`${url}${id}`, req).then((res) => {
        if (res.status === 204) {
            console.log("Item deleted");
        } else if (res.status === 401) {
            console.error("Unauthorized");
        } else {
            console.error("Unexpected behaviour");
        }
    });
}
