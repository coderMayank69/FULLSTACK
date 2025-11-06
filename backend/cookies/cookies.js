const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/greet', (req, res) => {
    console.log(req.cookies);
    res.send('Hello World');
});

app.get('/setName', (req, res) => {
    res.cookie('name','Mayank');
    res.send('Cookie Set');
});

app.get('/greet/:name', (req, res) => {
    res.cookie('name', req.params.name);
    res.send(`Hello ${req.params.name}`);
});

app.listen(3000, () => {
    console.log('server is live');
});
