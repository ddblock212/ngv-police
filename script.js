// Функція для відображення вибраного розділу
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Додавання подій для кнопок навігації
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('data-section');
        showSection(sectionId);
    });
});

// Обробка форми повідомлення про злочин
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваше повідомлення відправлено! Поліція Негровки реагуватиме негайно.');
    this.reset();
});

button.addEventListener("click", async function () {
    // Легка операція, яка не блокує
    // ...
    await someHeavyFunction();
});

