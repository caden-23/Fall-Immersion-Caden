const form = document.getElementById('myForm');
addEventListener("sumbit", function(event){
    event.preventDefault()

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('last name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && lastname && email && message){
        alert('form submit successfully!\nName: ${name}\nlastname: ${last name}\nEmail: ${email}\nMessage ${Message}');
    } else {
        alert('Please fill all the fields');
    }
})
