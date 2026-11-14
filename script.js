
// Select the button and message element
const contactBtn = document.getElementById("contactBtn");
const message = document.getElementById("message");

// Add click event
contactBtn.addEventListener("click", function() {
    message.textContent = "Thanks for visiting my portfolio!";
    message.style.color = "green";
});

// Console message
console.log("My GitHub practice project is running!");

// Simple addition function
function addNumbers(a, b) {
    return a + b;
}

console.log("Addition:", addNumbers(10, 20));
