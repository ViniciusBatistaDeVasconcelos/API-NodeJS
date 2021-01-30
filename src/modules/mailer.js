const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const {host, port, user, pass} = require('../config/mail.json');

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

transport.use(
  'compile',
  hbs({
      viewEngine: {
          extName: '.hbs',
          partialsDir: './resources/mail/auth', 
          layoutsDir: './resources/mail/auth',
          defaultLayout: '',
      },
      extName: '.hbs',
      viewPath: './resources/mail/auth',
  })
)

module.exports = transport;