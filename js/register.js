function submitForm() {
  var us = document.getElementById("username").value;
  var em = document.getElementById("email").value;
  var pass = document.getElementById('password').value;

  var message = "Username: " + us + "\n";
  message += "email: " + em + "\n";
  message += "password: " + pass + "\n";

  alert(message);
}

function loginForm() {
  window.location.href = 'login.html';
}
// Function to validate the form data
function validateForm() {
  var us = document.getElementById("username").value;
  var em = document.getElementById("email").value;
  var pass = document.getElementById('password').value;
  
  // Check if username is empty
  if (us === "") {
    alert("Username cannot be empty");
    return false;
  }

  // Check if email is empty
  if (em === "") {
    alert("Email cannot be empty");
    return false;
  }

  // Simple email format validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(em)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Check if password is empty
  if (pass === "") {
    alert("Password cannot be empty");
    return false;
  }

  // Password length validation
  if (pass.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  // If all validations pass
  return true;
}

// Function to validate if the user wants to log in
function validateLogin() {
  var confirmLogin = confirm("Do you want to log in?");
  if (confirmLogin) {
    window.location.href = 'login.html';
  }
}

// Function to validate if the user wants to register
function validateRegister() {
  var confirmRegister = confirm("Do you want to register?");
  if (confirmRegister) {
    window.location.href = 'register.html';
  }
}

// Main submit function that integrates validation
function submitForm() {
  // Validate the form data first
  if (validateForm()) {
    var us = document.getElementById("username").value;
    var em = document.getElementById("email").value;
    var pass = document.getElementById('password').value;

    var message = "";
    var fields = [
      { name: "Username", value: us },
      { name: "Email", value: em },
      { name: "Password", value: pass }
    ];

    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      message += field.name + ": " + field.value + "\n";
    }

    alert(message);
  }
}

// Attach event listeners to buttons (assuming buttons have specific IDs)
document.getElementById("loginButton").addEventListener("click", validateLogin);
document.getElementById("registerButton").addEventListener("click", validateRegister);
