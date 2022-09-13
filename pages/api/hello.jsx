// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

"use strict";
const nodemailer = require("nodemailer");

export default function sendMail(req, res) {

  let transporter = nodemailer.createTransport({
    host: 'email-smtp.us-east-1.amazonaws.com',
    port: 465,
    auth: {
      use: 'AKIAVCSUDXUJAF2PUJPQ',
      pass: 'BJzKPsN682hrD49nceH5F9TuTWn7P4bm0xQZXJARjUo7'
    }
  })

  transporter.sendMail({
    from: 'Contato HP Bank <tecnologia@hpcap.com.br>',
    to: 'icaro.albar@hpcap.com.br',
    subject: "Mensagem do site HP Bank",
    text: `<b>Nome:</b>${req.body.nome}<br>
           <b>Email:</b>${req.body.email}<br>
           <b>Telefone:</b>${req.body.telefone}<br>
           <b>Assunto:</b>${req.body.assunto}<br>
           <b>Mensagem:</b>${req.body.mensagem}`,

    html: `<b>Nome:</b>${req.body.nome}<br>
           <b>Email:</b>${req.body.email}<br>
           <b>Telefone:</b>${req.body.telefone}<br>
           <b>Assunto:</b>${req.body.assunto}<br>
           <b>Mensagem:</b>${req.body.mensagem}`
  }).then(response => { res.send(response) })
    .catch(erro => { res.send(erro) })
}