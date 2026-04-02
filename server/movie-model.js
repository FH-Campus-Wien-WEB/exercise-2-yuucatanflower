/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
    "tt0253474": {
        "imdbID": "tt0253474",
        "Title": "The Pianist",
        "Released": "2003-01-03",
        "Runtime": 150,
        "Genres": ["Biography", "Drama", "Music"],
        "Directors": ["Roman Polanski"],
        "Writers": ["Ronald Harwood", "Wladyslaw Szpilman"],
        "Actors": ["Adrien Brody", "Thomas Kretschmann", "Frank Finlay"],
        "Plot": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Metascore": 85,
        "imdbRating": 8.5
    },
    "tt1210166": {
        "imdbID": "tt1210166",
        "Title": "Moneyball",
        "Released": "2011-09-23",
        "Runtime": 133,
        "Genres": ["Biography", "Drama", "Sports"],
        "Directors": ["Bennett Miller"],
        "Writers": ["Steven Zaillian", "Aaron Sorkin", "Stan Chervin"],
        "Actors": ["Brad Pitt", "Robin Wright", "Jonah Hill"],
        "Plot": "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg",
        "Metascore": 87,
        "imdbRating": 7.6
    },
    "tt0109830": {
        "imdbID": "tt0109830",
        "Title": "Forrest Gump",
        "Released": "1994-07-06",
        "Runtime": 142,
        "Genres": ["Drama", "Romance"],
        "Directors": ["Robert Zemeckis"],
        "Writers": ["Winston Groom", "Eric Roth"],
        "Actors": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        "Plot": "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg",
        "Metascore": 82,
        "imdbRating": 8.8
    }
};

module.exports = movies;