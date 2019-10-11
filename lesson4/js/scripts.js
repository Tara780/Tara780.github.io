// Toggle the hamburger menu class name upon click
function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

// Return current date in the format "Wednesday, 20 May 2020"
const options = { dateStyle: 'full' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);