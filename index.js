// This i 4 Swiper Slider
  var swiper = new Swiper(".heroSwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    speed: 1000,
  });


const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/send-appointment', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Configure transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      // user: 'YOUR_EMAIL@gmail.com',
      // pass: 'YOUR_EMAIL_PASSWORD'
      user: 'YOUR_EMAIL@gmail.comazharashraf194@gmail.com',
      pass: 'aouudqndaorpexky'
    }
  });

  // Email details
  const mailOptions = {
    from: email,
    // to: 'YOUR_EMAIL@gmail.com', // your notification email
    to: 'azharashraf194@gmail.com', // your notification email
    subject: 'New Makeup Appointment Booking',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).send('Error sending email');
    res.status(200).send('Notification sent!');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
