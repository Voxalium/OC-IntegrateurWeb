
//DOM
const gallery = document.body.querySelector(".gallery");
//Fetch
const url = "http://localhost:5678/api/works";
const response = await fetch(url);
const data = await response.json();
const dataSet = new Set();
dataSet.add(data);


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
