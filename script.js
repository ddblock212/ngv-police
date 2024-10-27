<script>
    // Ініціалізація EmailJS
    (function() {
        emailjs.init("DniaC6TcZSvJijmVZ"); // Ваш Public Key від EmailJS
    })();

    // Функція для показу секцій
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = 'none'; // Сховати всі секції
        });
        document.getElementById(sectionId).style.display = 'block'; // Показати вибрану секцію
    }

    // Обробка форми
    document.getElementById('crimeReportForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const incident = document.getElementById('incident').value;
        const email = document.getElementById('email').value;

        emailjs.send("service_2y41nn7", "template_vxwpcik", {
            name: name,
            address: address,
            incident: incident,
            email: email
        }).then(response => {
            alert('Ваше повідомлення відправлено! Поліція Негровки реагуватиме негайно.');
            document.getElementById('crimeReportForm').reset();
        }, error => {
            alert('Помилка при відправці повідомлення. Спробуйте ще раз.');
        });
    });
</script>
