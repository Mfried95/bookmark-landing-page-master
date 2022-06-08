
///////////////       NAVIGATION     ///////////////// 


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



///////////////       FEATURES     ///////////////// 

const featureSection = document.querySelector(".feature-sections")

const tab1 = document.getElementById("tab1")
const tab2 = document.getElementById("tab2")
const tab3 = document.getElementById("tab3")


// Tab 1

tab1.addEventListener("click", function(e){
    e.preventDefault(e)
    featureSection.innerHTML = `<div class="feature-img">
    <img src="images/illustration-features-tab-1.svg" alt="">
</div>
<div class="feature-content">
<h2>Bookmark in one click</h2>
<p>Organize your bookmarks however you like. Our simple drag-and-drop interfeace gives you complete control over how you manage your favorite sites.</p>
<button class="more-info">More Info</button>
</div>`
})

// Tab 2

tab2.addEventListener("click", function(e){
    e.preventDefault()
    featureSection.innerHTML = `<div class="feature-img">
    <img src="images/illustration-features-tab-2.svg" alt="">
</div>
<div class="feature-content">
<h2>Intelligent search</h2>
<p>Our powerful search feature will help you find saved sites in no time at all. 
No need to trawl through all of your bookmarks.</p>
<button class="more-info">More Info</button>
</div>`
})

// Tab 3

tab3.addEventListener("click",function(e){
    e.preventDefault()
    featureSection.innerHTML = `<div class="feature-img">
    <img src="images/illustration-features-tab-3.svg" alt="">
</div>
<div class="feature-content">
<h2>Share your bookmarks</h2>
<p>Easily share your bookmarks and collections with others. Create a shareable 
link that you can send at the click of a button.</p>
<button class="more-info">More Info</button>
</div>`
})


///////////////     FREQUENTLY ASKED QUESTIONS     ///////////////// 



