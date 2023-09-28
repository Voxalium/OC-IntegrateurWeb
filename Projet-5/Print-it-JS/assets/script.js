const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];
const dots = document.body.querySelector(".dots");
const arrowRight = document.body.querySelector(".arrow_right");
const arrowLeft = document.body.querySelector(".arrow_left");

const img = document.body.querySelector(".banner-img");
const text =  document.body.querySelector(".banner-text"); 

let index = 0;

const drawDots = () => {
    while (dots.hasChildNodes()) {
        dots.removeChild(dots.firstChild);
    }

    for (let i = 0; i != slides.length; i++) {
        const dot = document.createElement("span");
        if (i == index) {
            dot.className = "dot dot_selected";
        } else dot.className = "dot";
        dots.appendChild(dot);
    }
};

drawDots();

arrowLeft.addEventListener("click", () => {
    if (index <= 0) {
        index = slides.length - 1;
    } else index--;
    img.src = "./assets/images/slideshow/" + slides[index].image;
    text.innerHTML = slides[index].tagLine;
    console.log(index);
    drawDots();
});

arrowRight.addEventListener("click", () => {
    if (index >= slides.length - 1) {
        index = 0;
    } else index++;
    img.src = "./assets/images/slideshow/" + slides[index].image;
    text.innerHTML = slides[index].tagLine;
    console.log(index);

    drawDots();
});
