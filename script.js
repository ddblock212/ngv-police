function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        incident: document.getElementById('incident').value,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Ваше повідомлення відправлено успішно!');
            document.getElementById('reportForm').reset();
        }, function(error) {
            alert('Помилка при надсиланні повідомлення.');
            console.log('FAILED...', error);
        });
});
