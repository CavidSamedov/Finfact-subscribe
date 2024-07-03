
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;

    document.getElementById('success-message').style.display = 'block';

    document.getElementById('subscribe-form').style.display = 'none';
});

