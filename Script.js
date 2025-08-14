// Function to greet the user
function greetUser() {
    const name = prompt("What's your name?");
    if (name) {
        alert(`Hello, ${name}! Welcome to our page 🎉`);
    } else {
        alert("Hello! You didn’t tell me your name 😄");
    }
}

// Function to change background color randomly
function changeBackgroundColor() {
    const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#bdb2ff", "#ffc6ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to show live time
function showTime() {
    const now = new Date();
    document.getElementById("time").textContent = now.toLocaleTimeString();
}

// Wait until page is ready
document.addEventListener("DOMContentLoaded", function () {
    // Run greeting once when page loads
    greetUser();

    // Set up button click to change background
    document.getElementById("colorBtn").addEventListener("click", changeBackgroundColor);

    // Update clock every second
    setInterval(showTime, 1000);
    showTime(); // Show immediately
});
