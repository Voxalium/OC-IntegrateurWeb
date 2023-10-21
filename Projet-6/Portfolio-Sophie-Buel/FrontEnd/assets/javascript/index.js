//DATA
import { drawData } from "./drawData.js";
import data from "./fetchData.js";

const dataSet = new Set();
dataSet.add(data);

//DOM

const gallery = document.body.querySelector(".gallery");
const tous = document.querySelector(".filter-tous");
const objets = document.querySelector(".filter-objets");
const appart = document.querySelector(".filter-appart");
const hotel = document.querySelector(".filter-hotels");
const button = document.getElementsByClassName("button");
//Button selection
const addSelectClass = function () {
    removeSelectClass();
    this.classList.add("button-selected");
};
const removeSelectClass = function () {
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove("button-selected");
    }
};

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", addSelectClass);
}

//Filter
tous.addEventListener("click", () => {
    dataSet.clear();
    dataSet.add(data);
    drawData(dataSet, gallery);
});

objets.addEventListener("click", () => {
    dataSet.clear();
    dataSet.add(
        data.filter((i) => {
            return i.category.name === "Objets";
        })
    );
    drawData(dataSet, gallery);
});

appart.addEventListener("click", () => {
    dataSet.clear();
    dataSet.add(
        data.filter((i) => {
            return i.category.name === "Appartements";
        })
    );
    drawData(dataSet, gallery);
});

hotel.addEventListener("click", () => {
    dataSet.clear();
    dataSet.add(
        data.filter((i) => {
            return i.category.name === "Hotels & restaurants";
        })
    );
    drawData(dataSet, gallery);
});

//Draw data
drawData(dataSet, gallery);
