const nodemailer = require('nodemailer');
const mailer = require('../config/').mailerConfig;

//Criando conexão SMTP
const mailConfig = {
    secureConnection: mailer.hotmail.secureConnection,
    service: mailer.hotmail.service,
    auth: {
        user: mailer.hotmail.auth.user,
        pass: mailer.hotmail.auth.pass,
        port: 587
    },
    tls: {
        ciphers: mailer.hotmail.tls.ciphers,
        rejectUnauthorized: mailer.hotmail.tls.rejectUnauthorized
    }
};

const transport = nodemailer.createTransport(mailConfig);

exports.sendEmails = async (email, title, output, { attachments }) => {

    let message = {
        from: mailer.hotmail.auth.user,
        to: email,
        replyTo: process.env.REPLYTO_ADDRESS,
        subject: title,
        html: output,
        attachments: attachments,
        date: Date.now()
    };

    //Envia o email
    await transport.sendMail(message, function (err, info) {
        if (err) { console.log(err) }
        else { console.log(info); }
    });
};