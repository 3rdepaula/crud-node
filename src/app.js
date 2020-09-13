const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/controllers/index')(app);

app.listen(8888, function(){
    console.log('__SERVER__');
});