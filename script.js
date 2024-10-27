<script>
    (function() {
        emailjs.init("DniaC6TcZSvJijmVZ"); // Замініть DniaC6TcZSvJijmVZ на ваш Public Key від EmailJS
    })();

    document.getElementById('crimeReportForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const incident = document.getElementById('incident').value;
        const email = document.getElementById('email').value;

        // Заміна service_id та template_id
        emailjs.send("service_2y41nn7", "template_vxwpcik", { // Заміна тут
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
