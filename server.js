const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
/*
app.use((req, res, next) => {
    res.render('maintenance.hbs');
});*/

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

/*app.get('/', (req, res) => {
    res.send('<h2>Hello Root page</h2>');
});*/

app.get('/', (req, res) => {
    res.render('home.hbs', {
       pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to root'
    });
});

app.get('/bad', (req, res) => {
   res.send({
      errorMessage: 'Sorry. An error occured'
   });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects Page',
        welcomeMessage: 'Welcome to projects'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        welcomeMessage: 'Welcome to about'
    });
});

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
});