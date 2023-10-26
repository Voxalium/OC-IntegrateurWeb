export function createForm() {
    const form = document.createElement("form");
    form.setAttribute("id", "modalForm");
    return form;
}

export function validateForm() {
    const titleInput = document.querySelector("#titleInput").value;
    const imageInput = document.querySelector("#add-image").files[0];
    const submitButton = document.querySelector("#submit");
    const info = document.querySelector("#info-modal");
    info.innerHTML = "";
    if (titleInput && imageInput) {
        submitButton.style.backgroundColor = "#1D6154";
        info.innerHTML = ""
    } else {
        submitButton.style.backgroundColor = "#A7A7A7";
        info.style.color = "red";
        info.innerHTML = "Champs manquants";
    }
}

export function createImageContainer() {
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    imgContainer.innerHTML = `
        <img class="add-photo-image" src="../../assets/icons/addphoto.png">
        <span class="add-photo-button">+ Ajouter photo</span>
        <p class="add-photo-text">jpg, png : 4mo max</p>
    `;
    return imgContainer;
}
export function createInfo() {
    const info = document.createElement("span");
    info.setAttribute("id", "info-modal");
    info.innerHTML = "";
    return info;
}
export function createLabel(text) {
    const label = document.createElement("label");
    label.innerHTML = text;
    return label;
}
export function createInput(type, id) {
    const input = document.createElement("input");
    input.type = type;
    input.setAttribute("id", id);
    input.required = true;
    return input;
}
export function createSelect() {
    const select = document.createElement("select");
    select.setAttribute("id", "selectImg");
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
export function createSubmitButton() {
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.innerHTML = "Valider";
    submitButton.setAttribute("id", "submit");
    return submitButton;
}
