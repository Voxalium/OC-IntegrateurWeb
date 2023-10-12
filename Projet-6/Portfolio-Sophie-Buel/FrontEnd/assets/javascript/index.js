import { fetchData } from "./fetchData.js";
const url = "http://localhost:5678/api/works";
const gallery = document.body.querySelector(".gallery");
fetchData(url).then((data) => {
    //Boucle titre
    for (let i in data) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        img.src = `${data[i].imageUrl}`;
        figcaption.innerHTML = `${data[i].title}`;
        figure.appendChild(img);
        figure.appendChild(figcaption);

        gallery.appendChild(figure);
        //console.log(`${i}: ${data[i].title}`);
    }
});
