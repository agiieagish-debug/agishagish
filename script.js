const navbar =document.querySelector(".navbar-section");
window.addEventListener("scroll", function () {
    if (window.scrollY >20) {
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});

function opencv() {
    window.open("Untitled document (1).pdf", "_blank");
}



var sidenav = document.querySelector(".sidenavbar-section")
function shownavbar() {
    sidenav.style.left = "0"
}

function closenavbar() {
    sidenav.style.left = "-100%"
}