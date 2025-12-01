const nonVeg = document.querySelector(".non-veg")
const veg = document.querySelector(".veg")
// const fastFood = document.querySelector(".")
const menu = document.querySelector(".menu")
const mobileNavbar = document.querySelector(".mobile-navbar")
const closeIcon = document.querySelector("#closeMenu")
const fPara = document.querySelector(".f-para");
const sPara = document.querySelector(".s-para");
const tPara = document.querySelector(".t-para");
const foPara = document.querySelector(".fo-para");
const fiPara = document.querySelector(".fi-para");


menu.addEventListener("click" , ()=>{
    console.log("hello")
    mobileNavbar.style.display = "block"
})
closeIcon.addEventListener("click", ()=>{
    mobileNavbar.style.display = "none"
})