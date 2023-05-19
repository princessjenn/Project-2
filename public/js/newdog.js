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
        id: parseInt(id),
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
        document.location.replace('/adopt');
        return response.json();
    }).then(data => {
        console.log(data);
    })
})

// removing dog
document.querySelector('#dogContainer').addEventListener('click', async function(event) {
    console.log("hello world", event.target);
    if(event.target.matches(".deleteDog")){
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/adopt/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          console.log(response);
          document.location.replace('/adopt');
        } else {
          alert('Failed to delete dog');
        }
      }
    }
})


