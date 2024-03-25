// Function to toggle mobile menu visibility
function toggleMobileMenu() {
    var mobileMenu = document.getElementsByClassName("mobile-menu")[0];
    mobileMenu.classList.toggle("show");
    document.querySelector('.overlay').classList.toggle('show');
}

// Add click event listener to the menu icon
document.getElementsByClassName("menu-icon")[0].addEventListener("click", toggleMobileMenu);

document.addEventListener("click", function(event) {
    var mobileMenu = document.querySelector(".mobile-menu");
    var menuIcon = document.querySelector(".menu-icon");
    
    // Check if the clicked element is not the mobile menu or the menu icon
    if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        mobileMenu.classList.remove("show");
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(progress => {
        console.log(progress)
        const percentage = parseFloat(progress.parentElement.querySelector('.second-span').textContent);
        console.log(percentage)
        progress.style.width = `${percentage}%`;
        progress.classList.add('fill-animation');
    });
});


const currentUrl = window.location.href;

const navLinks = document.querySelectorAll('.nav .links a');

navLinks.forEach(link => {
    
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});


const homeUrl = window.location.href;

const navHomeLink = document.querySelectorAll('.nav-home .links a');

navHomeLink.forEach(link =>{
    if(link.href === homeUrl){
        link.classList.add('active');
    }
})