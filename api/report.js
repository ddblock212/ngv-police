// apireport.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, address, incident } = req.body;

        // Налаштування транспорту для Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'korobchuk.tima@gmail.com', // Ваша електронна адреса
            },
        });

        // Налаштування електронного листа
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: 'korobchuk.tima@gmail.com', // Адреса, куди надсилати
            subject: 'Повідомлення про злочин',
            html: `
                <h1>Новий звіт про злочин</h1>
                <p><strong>Ім'я:</strong> ${name}</p>
                <p><strong>Адреса:</strong> ${address}</p>
                <p><strong>Що сталося:</strong> ${incident}</p>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Ваше повідомлення відправлено!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Виникла проблема з відправкою електронної пошти.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Метод ${req.method} не дозволений`);
    }
}
