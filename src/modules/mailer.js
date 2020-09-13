const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass } = require('../config/mail.json');
 
const transporter = nodemailer.createTransport({
    host,
    port,
    auth: { 
        user,
        pass 
    }
});
var options = {
    viewEngine : {
        extname: '.html',
        layoutsDir: './src/resources/mail/auth',
        defaultLayout: 'forgot',
        partialsDir: './src/resources/mail/auth',
    },
    viewPath: './src/resources/mail/auth/',
    extName: '.html'
    };

    transporter.use('compile', hbs(options));

module.exports = transporter;