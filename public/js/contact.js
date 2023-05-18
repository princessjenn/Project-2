// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
  
    // Create data object with form values
    var data = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
  });