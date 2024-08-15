document.getElementById("subscribeButton").addEventListener("click", function() {
    if (!isUserLoggedIn()) {
        // Redirect to login page
        window.location.href = "/login?redirect=/subscribe";
    } else {
        // Process the subscription
        subscribeUser();
    }
});

function isUserLoggedIn() {
    // This should return true if the user is logged in
    return !!localStorage.getItem("authToken"); // Example with token
}

function subscribeUser() {
    // Handle the subscription process here, e.g., API call to subscribe
    console.log("User subscribed!");
}
// script.js

// Simulating user data
let isLoggedIn = false;
let isOtpVerified = false;
let generatedOtp = null;

// Simulated function to send OTP (In real cases, you'd send this to the user's email or phone)
function sendOtp() {
    generatedOtp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    console.log("Your OTP is:", generatedOtp); // Simulate sending OTP (replace with actual OTP sending)
}

// Handling Login Process
document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demonstration)
    if (username === "user" && password === "pass") {
        isLoggedIn = true;
        sendOtp(); // Send OTP after successful login
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('otpForm').style.display = 'block';
        document.getElementById('message').textContent = "Login successful! Please enter the OTP sent to your registered email.";
    } else {
        document.getElementById('message').textContent = "Invalid username or password!";
    }
});

// script.js

function changeBackgroundColor() {
    const colors = ["#33FF57", "#33FF57", "#3357FF", "#FF33A1", "#33FFF3", "#FF8C33"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Change background color every 2 seconds (2000 milliseconds)
setInterval(changeBackgroundColor, 2000);
