// --------------Bật tắt menu------------
var navLinks = document.getElementById("navLinks")
function showMenu() {
    navLinks.style.right = "0"
}
function hideMenu() {
    navLinks.style.right = "-400px"
}
// ----------------Gửi email------------------
function sendMsg(e) {
    e.preventDefault();
    const form = document.querySelector('.contact_form'),
            name = document.querySelector('.name'),
            email = document.querySelector('.email'),
            title = document.querySelector('.title'),
            msg = document.querySelector('.msg');





///function send email
    Email.send({
        SecureToken : "c3a42e11-03a3-401a-98f5-758f4df8e17e",
        To : 'hangoclongvinh@gmail.com',
        From : email.value,
        Subject : title.value,
        Body : msg.value
    }).then(
    message => alert(message)
    );

}
// ---------------------------Mail---------------------
// const nodemailer = require('nodemailer');

// // Tạo một transporter
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'hangoclongvinh2@gmail.com',
//     pass: 'vinh8122005'
//   }
// });

// // Cấu hình email
// const mailOptions = {
//   from: 'hangoclongvinh2@gmail.com',
//   to: 'nguyendangcongminh09122000@gmail.com',
//   subject: 'Test email',
//   text: 'This is a test email sent from Node.js using Nodemailer.'
// };
// // Gửi email
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
// --------------------------Login&Reg-------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use