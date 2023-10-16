/* function w3_open() {
    document.getElementById("main").style.marginLeft = "15%";
    document.getElementById("mySidebar").style.width = "15%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
} */
// =========================================================================

//===============================================================================
// Get references to the elements you need
var hamburger = document.querySelector(".hamburger");
var loginButton = document.getElementById("logoutButton");
var sideNav = document.getElementById("sideNav");

// Function to handle the side menu state
function toggleSideMenu() {
    // Toggle the class "active" on the body to show/hide the side menu
    document.querySelector("body").classList.toggle("active");

    // Check if the side menu is open (body has the "active" class)
    if (document.body.classList.contains("active")) {
        // Side menu is open, decrease the button's margin-left
        loginButton.style.marginLeft = "20px"; // Adjust the margin as needed
    } else {
        // Side menu is closed, increase the button's margin-left
        loginButton.style.marginLeft = "70px"; // Adjust the margin as needed
    }
}

// Add a click event listener to the hamburger menu icon
hamburger.addEventListener("click", toggleSideMenu);




