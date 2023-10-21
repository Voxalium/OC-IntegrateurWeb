export const drawData = (data, container) => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    for (let i of data.keys().next().value) {
        //        console.log(i.title);
        const fig = document.createElement("figure");
        const img = document.createElement("img");
        const fc = document.createElement("figcaption");
        const tc = document.createElement("img");
        tc.className = "trashCan"
        tc.src = "assets/icons/trash-can-solid.png";

        img.src = i.imageUrl;
        fc.innerHTML = i.title;
        fig.appendChild(img);
        fig.appendChild(fc);
        fig.appendChild(tc);
        container.appendChild(fig);
    }
};
