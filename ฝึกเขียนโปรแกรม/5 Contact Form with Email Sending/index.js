document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://your-server-url.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').textContent = data.message;
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('status').textContent = 'An error occurred. Please try again later.';
    });
});
