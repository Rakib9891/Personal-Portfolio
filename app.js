let tabLinks = document.querySelectorAll(".tab-links")
let tabContents = document.querySelectorAll(".tab-content")
const menu = document.querySelector("#open2")
const menuCls = document.querySelector("#open")
const ul = document.querySelector(".ul")

// About section skills, education and exparience 
const OpenTab = (tabname) => {
    for (const tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for (const tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// Menu open and close 
menu.addEventListener("click",()=> {
    ul.style.right= 0;
})
menuCls.addEventListener("click",()=> {
    ul.style.right= "-200px";
})