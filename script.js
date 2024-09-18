document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = document.getElementById('data').value;

    fetch('/save-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('response').textContent = result;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').textContent = 'Error saving data';
    });
});
