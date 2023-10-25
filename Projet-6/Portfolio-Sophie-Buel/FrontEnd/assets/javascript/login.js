const loginUrl = "http://localhost:5678/api/users/login";
const loginForm = document.getElementById("loginForm");

function handleFormSubmit(e) {
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

loginForm.addEventListener("submit", handleFormSubmit);
