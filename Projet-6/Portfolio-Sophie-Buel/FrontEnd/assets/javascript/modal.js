import { drawData} from "./drawData.js";
import data from "./fetchData.js";

const dataSet = new Set();
dataSet.add(data);

const modal = document.querySelector(".modal");
const edit = document.querySelector(".edit-projects");
const xmark = document.querySelector(".xmark");
const modalGrid = document.querySelector(".modal-grid");

xmark.addEventListener("click", () => {
    modal.style.display = "none";
});

edit.addEventListener("click", () => {
    modal.style.display = "flex";
});

drawData(dataSet, modalGrid);
