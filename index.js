// index.js

// 1. Get the menu button (class)
var butSideBar = document.querySelector('.buttonSideBar');

// 2. Get the sidebar element (class)
var menuSideBar = document.querySelector('.sideBar');

// 3. Get the close icon (ID)
var iconClose = document.querySelector('#iconClose'); 

// Function to handle the toggle
function toggleSidebar() {
    // Toggles 'active' on the button (if you want its icon to change)
    butSideBar.classList.toggle("active");
    
    // Toggles 'open' on the sidebar element to slide it in/out
    menuSideBar.classList.toggle("open");
}

// Attach the listener for the open button
if (butSideBar) {
    butSideBar.addEventListener('click', toggleSidebar);
}

// Attach the listener for the close button
if (iconClose) {
    iconClose.addEventListener('click', toggleSidebar);
}