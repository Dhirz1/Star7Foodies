const menu = document.querySelector(".menu")
const mobileNavbar = document.querySelector(".mobile-navbar")
const closeIcon = document.querySelector("#closeMenu")
const fPara = document.querySelector(".f-para");
const sPara = document.querySelector(".s-para");
const tPara = document.querySelector(".t-para");
const foPara = document.querySelector(".fo-para");
const fiPara = document.querySelector(".fi-para");


tPara.addEventListener("click", ()=>{
    sPara.classList.remove("active")
    foPara.classList.remove("active")
    tPara.classList.add("active")
});
foPara.addEventListener("click", ()=>{
    sPara.classList.remove("active")
    fPara.classList.remove("active")
    tPara.classList.remove("active")
    foPara.classList.add("active")
});
sPara.addEventListener("click",()=>{
    tPara.classList.remove("active")
    foPara.classList.remove("active")
    sPara.classList.add("active")

})

menu.addEventListener("click" , ()=>{
    console.log("hello")
    mobileNavbar.style.display = "block"
})
closeIcon.addEventListener("click", ()=>{
    mobileNavbar.style.display = "none"
})