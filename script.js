<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
    (function() {
        emailjs.init("DniaC6TcZSvJijmVZ"); // Ваш Public Key від EmailJS
    })();

    document.getElementById('crimeReportForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Запобігаємо стандартному відправленню форми

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const incident = document.getElementById('incident').value;
        const email = document.getElementById('email').value;

        // Відправка повідомлення
        emailjs.send("service_2y41nn7", "template_vxwpcik", {
            name: name,
            address: address,
            incident: incident,
            email: email
        }).then(response => {
            alert('Ваше повідомлення відправлено! Поліція Негровки реагуватиме негайно.');
            document.getElementById('crimeReportForm').reset(); // Очищення форми
        }, error => {
            console.error("Помилка:", error); // Виводимо деталі помилки у консоль
            alert('Помилка при відправці повідомлення. Спробуйте ще раз.');
        });
    });
</script>
