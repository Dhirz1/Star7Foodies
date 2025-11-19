const menu = document.querySelector(".menu")
const mobileNavbar = document.querySelector(".mobile-navbar")
const closeIcon = document.querySelector("#closeMenu")

menu.addEventListener("click" , ()=>{
    mobileNavbar.style.display = "block"
})
closeIcon.addEventListener("click", ()=>{
    mobileNavbar.style.display = "none"
})