function submitForm() {
  var us = document.getElementById("username").value;
  var em = document.getElementById("email").value;
  var pass = document.getElementById('password').value;

  var message = "Username: " + us + "\n";
  message += "email: " + em + "\n";
  message += "password: " + pass + "\n";

  alert(message);
}