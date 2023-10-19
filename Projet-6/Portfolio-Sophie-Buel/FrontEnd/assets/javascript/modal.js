const modal = document.querySelector(".modal");
const edit = document.querySelector(".edit-projects");
const xmark = document.querySelector(".xmark");

xmark.addEventListener("click", () => {
    modal.style.display = "none";
});

edit.addEventListener("click",()=>{
    modal.style.display = "flex"
})
