require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    ctrl = require('./controller');

const app = express(),
    {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 324657980756
    } 
}));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`there are ${SERVER_PORT} pandas`));
});

app.get('/api/current', ctrl.getUser);
app.get('/api/posts')

app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
app.post('/auth/logout', ctrl.logout);