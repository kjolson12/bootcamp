const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('CONNECTION OPEN');
    })
    .catch(err => {
        console.log('OH NO ERROR!');
        console.log(err);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

//const infinityWar = new Movie({ title: 'Infinity War', year: 2018, score: 9.4, rating: 'PG-13' });

Movie.insertMany([
    { title: 'End Game', year: 2019, score: 9.1, rating: 'R' },
    { title: 'Iron Man', year: 2008, score: 9.2, rating: 'PG-13' },
    { title: 'Thor: Dark World', year: 2013, score: 7.3, rating: 'PG-13' },
    { title: 'Guardians of the Galaxy', year: 2014, score: 8.9, rating: 'PG' },
    { title: 'Captain America: Civil War', year: 2016, score: 8.6, rating: 'PG-13' }
])
    .then(data => {
        console.log('IT WORKED!');
        console.log(data);
    })