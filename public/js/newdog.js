// script.js
document.getElementById('petForm').addEventListener('submit', function (event) {
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

    // Create data object with form values
    var data = {
        name: name,
        status: availability,
        breed: breed,
        age: parseInt(age),
        sex: sex,
        vaccination: vaccination,
        date_arrived: arrivalDate,
        spay_neuter_status: spayedNeutered,
        description: description
    }

    // adds new dog

    // Send a POST request to the API endpoint
    fetch('/api/adopt/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    }).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
    })
})

