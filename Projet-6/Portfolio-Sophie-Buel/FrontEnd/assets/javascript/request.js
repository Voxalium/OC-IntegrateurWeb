import { drawPreview } from "./drawData.js";
import { fetchData } from "./fetchData.js";

const token = localStorage.getItem("token");
const urlWorks = "http://localhost:5678/api/works/";
const loginUrl = "http://localhost:5678/api/users/login";

//Add photo request
export function addDb(e) {
    e.preventDefault();

    const formData = new FormData();

    const category = document.querySelector("#selectImg").value;
    let categorySubmit = 0;
    if (category === "Objets") categorySubmit = 1;
    else if (category === "Appartements") categorySubmit = 2;
    else categorySubmit = 3;

    const imageInput = document.querySelector("#add-image");
    const imageFile = imageInput.files[0];

    formData.append("image", imageFile);

    formData.append("title", document.querySelector("#titleInput").value);
    formData.append("category", categorySubmit);

    const req = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    };
    const info = document.querySelector("#info-modal");
    info.innerHTML = "";
    fetch(urlWorks, req)
        .then((res) => {
            if (res.status === 201) {
                info.style.color = "green";
                info.innerHTML = "Données envoyées avec succès";
                drawPreview();
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

//Delete photo request
export function deleteDb(id) {
    const req = {
        method: "DELETE",
        headers: {
            accept: "*/*",
            Authorization: `Bearer ${token}`,
        },
    };
    fetch(`${urlWorks}${id}`, req).then((res) => {
        if (res.status === 204) {
            const gallery = document.querySelector(".gallery");
            const dataSet = new Set();

            fetchData(dataSet, gallery, "Tous");
            console.info("Item deleted");
        } else if (res.status === 401) {
            console.error("Unauthorized");
        } else {
            console.error("Unexpected behaviour");
        }
    });
}

//Login form request
export function loginSubmit(e) {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const loginData = {
        email,
        password,
    };

    const req = {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    };

    const erreur = document.querySelector("#erreur");
    erreur.innerHTML = "";

    fetch(loginUrl, req)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            } else if (res.status === 401) {
                throw new Error("Mauvais mot de passe");
            } else {
                throw new Error("Utilisateur inconnu");
            }
        })
        .then((data) => {
            localStorage.setItem("token", data.token);
            window.location.href = "../../index-edit.html";
        })
        .catch((error) => {
            erreur.setAttribute("id", "erreur");
            erreur.innerHTML = error.message;
            this.appendChild(erreur);
        });
}
