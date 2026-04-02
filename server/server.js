const express = require('express')
const path = require('path')
const movies = require('./movie-model.js') // import the movie data
const app = express()

//static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// to parse JSON body payloads on PUT/POST requests
app.use(express.json());

// GET endpoint for all movies (Task 1.2)
app.get('/movies', function (req, res) {
    // convert back to array
    res.json(Object.values(movies));
})

// Endpoint to get a single movie (Task 2.1)
app.get('/movies/:imdbID', function (req, res) {
    const id = req.params.imdbID;
    if (movies[id]) {
        res.json(movies[id]);
    } else {
        res.sendStatus(404);
    }
});

// Endpoint to update or create a movie (Task 3.1 & 3.2)
app.put('/movies/:imdbID', function(req, res) {
    const id = req.params.imdbID;
    const movieData = req.body;

    if (movies[id]) {
        // Exists -> Update -> Status 200
        movies[id] = movieData;
        res.sendStatus(200);
    } else {
        // Doesn't Exist -> Create -> Status 201
        movies[id] = movieData;
        res.status(201).json(movieData);
    }
});

app.delete('/movies/:imdbID', function(req, res) {
    const id = req.params.imdbID;

    // Check if the movie actually exists
    if (movies[id]) {
        delete movies[id];   // removes from memory
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

app.listen(3000)
console.log("Server now listening on http://localhost:3000/")