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

// Fetch DATA

async function fetchData() {
    const res = await fetch("http://localhost:5678/api/works");
    if (!res.ok) {
        throw new Error("Can't fetch data");
    }
    return res.json();
}

//Filter

tous.addEventListener("click", () => {
    fetchData().then((data) => {
        let f = data;
        drawData(f);
    });
});

objets.addEventListener("click", () => {
    fetchData().then((data) => {
        let f = data.filter((item) => {
            return item.category.name === "Objets";
        });
        drawData(f);
    });
});

appart.addEventListener("click", () => {
    fetchData().then((data) => {
        let f = data.filter((item) => {
            return item.category.name === "Appartements";
        });
        drawData(f);
    });
});

hotel.addEventListener("click", () => {
    fetchData().then((data) => {
        let f = data.filter((item) => {
            return item.category.name === "Hotels & restaurants";
        });
        drawData(f);
    });
});

//Default data
fetchData().then((data) => {
    let f = data;
    drawData(f);
});

//Draw data
const drawData = function (data) {
    while (gallery.hasChildNodes()) {
        gallery.removeChild(gallery.firstChild);
    }
    for (let i in data) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        img.src = `${data[i].imageUrl}`;
        figcaption.innerHTML = `${data[i].title}`;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    }
};
