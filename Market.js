// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Welcome Banner Display
window.onload = function() {
    const banner = document.getElementById("welcome-banner");
    banner.style.display = "block"; // Show the banner when page loads

    // Close the banner when the user clicks the close button
    document.getElementById("close-banner").addEventListener("click", function() {
        banner.style.display = "none";
    });
};
