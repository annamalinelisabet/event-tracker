const express = require('express');
const app = express();
const cors = require('cors');


const userController = require('./controllers/userController')
const eventController = require('./controllers/eventController')


// -- MIDDLEWARE -- //
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// -- CONTROLLERS -- //
app.use('/api/users', userController);
app.use('/api/events', eventController);


module.exports = app