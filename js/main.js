


// OPEN MENU 
const hamburgerOpen = document.getElementById("hamburger")
const dropOpen = document.querySelector(".mobile-nav")

hamburgerOpen.addEventListener("click", function(){
   dropOpen.style.display = "block"
})

// CLOSE MENU

const hamburgerClose = document.getElementById("hamburger-close")
const dropClose = document.querySelector(".mobile-nav active")

hamburgerClose.addEventListener("click", function(){
    dropOpen.style.display = "none"
})