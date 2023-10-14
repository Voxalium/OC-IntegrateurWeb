const gallery = document.body.querySelector(".gallery");
const tous = document.querySelector(".filter-tous");
const objets = document.querySelector(".filter-objets");
const appart = document.querySelector(".filter-appart");
const hotel = document.querySelector(".filter-hotels");
const button = document.getElementsByClassName("button");

//Fetch
const url = "http://localhost:5678/api/works";
const response = await fetch(url);
const data = await response.json();
const dataSet = new Set();
dataSet.add(data);

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
    drawData(dataSet);
});

objets.addEventListener("click", () => {
    dataSet.clear();
    dataSet.add(
        data.filter((i) => {
            return i.category.name === "Objets";
        })
    );
    drawData(dataSet);
});

appart.addEventListener("click", () => {
    dataSet.clear();
    dataSet.add(
        data.filter((i) => {
            return i.category.name === "Appartements";
        })
    );
    drawData(dataSet);
});

hotel.addEventListener("click", () => {
    dataSet.clear();
    dataSet.add(
        data.filter((i) => {
            return i.category.name === "Hotels & restaurants";
        })
    );
    drawData(dataSet);
});

//Draw data
const drawData = (data) => {
    while (gallery.hasChildNodes()) {
        gallery.removeChild(gallery.firstChild);
    }
    for (let i of data.keys().next().value) {
        //        console.log(i.title);
        const fig = document.createElement("figure");
        const img = document.createElement("img");
        const fc = document.createElement("figcaption");

        img.src = i.imageUrl;
        fc.innerHTML = i.title;
        fig.appendChild(img);
        fig.appendChild(fc);
        gallery.appendChild(fig);
    }
};

drawData(dataSet);
