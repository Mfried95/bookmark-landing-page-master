


// OPEN MENU 
const hamburgerOpen = document.getElementById("hamburger-open")
const dropOpen = document.querySelector(".mobile-nav")

hamburgerOpen.addEventListener("click", function(){
   dropOpen.style.display = "block"
   dropClose.style.display = "none"
})





// CLOSE MENU
const hamburgerClose = document.getElementById("hamburger-close")
const dropClose = document.querySelector(".mobile-nav-open")

hamburgerClose.addEventListener("click", function(){
    dropOpen.style.display = "none"
    dropClose.style.display = "block"
    dropClose.style.display = "flex"
})