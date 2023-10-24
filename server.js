const express = require('express');
const path = require('path');

const apitRoutes = require('./routes/notes');
const htmlRoutes = require('./routes/html');
const PORT = process.env.PORT || 3001;

const app = exoress();

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

// sending all API requests to notes.js
app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);