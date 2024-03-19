// Function to toggle mobile menu visibility
function toggleMobileMenu() {
    var mobileMenu = document.getElementsByClassName("mobile-menu")[0];
    mobileMenu.classList.toggle("show");
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