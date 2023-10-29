import { fetchData } from "./fetchData.js";

const gallery = document.querySelector(".gallery");
const dataSet = new Set();
const filters = document.querySelector(".filters");

fetchData(dataSet, gallery, "Tous");

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
