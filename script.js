function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваше повідомлення відправлено! Поліція Негровки реагуватиме негайно.');
    this.reset();
}); 
