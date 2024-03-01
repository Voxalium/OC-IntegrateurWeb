const divs = ["intro", "project", "skills", "footer"];
let i = 0;
let scrolling = false;

window.addEventListener("wheel", (e) => {
    e.preventDefault();
    const delta = Math.sign(e.deltaY);
    if (!scrolling) {
        i = (i = i + delta + divs.length) % divs.length;
        const nextDiv = document.getElementById(divs[i]);
        if (nextDiv) {
            scrolling = true;

            nextDiv.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                scrolling = false;
            }, 500);
        }
    }
});
