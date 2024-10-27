function showSection(sectionId) {
    // Отримати всі секції
    const sections = document.querySelectorAll('.section');
    
    // Перебрати секції та приховати всі, окрім обраної
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Показати обрану секцію
    document.getElementById(sectionId).style.display = 'block';
}

// Повідомлення при надсиланні форми
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваше повідомлення відправлено! Поліція Негровки реагуватиме негайно.');
    this.reset();
});
