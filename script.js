function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Сховати всі секції
    });
    document.getElementById(sectionId).style.display = 'block'; // Показати обрану секцію
}

// Слухач події на відправлення форми
document.getElementById('reportForm').addEventListener('submit', function(event) {
    alert('Ваше повідомлення надіслано!');
});
