// script.js
document.getElementById('petForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    var name = document.getElementById('name').value;
    var availability = document.getElementById('availability').value;
    var breed = document.getElementById('breed').value;
    var age = document.getElementById('age').value;
    var sex = document.getElementById('sex').value;
    var vaccination = document.getElementById('vaccination').value;
    var arrivalDate = document.getElementById('arrivalDate').value;
    var spayedNeutered = document.getElementById('spayedNeutered').checked;
    var description = document.getElementById('description').value;

    // Compile Handlebars template
    var template = Handlebars.compile(document.getElementById('pet-template').innerHTML);

    // Create data object with form values
    var data = {
        name: name,
        availability: availability,
        breed: breed,
        age: age,
        sex: sex,
        vaccination: vaccination,
        arrivalDate: arrivalDate,
        spayedNeutered: spayedNeutered
    }
})
