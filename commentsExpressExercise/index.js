const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: 'Taque',
        comment: 'I am the best GEB in North America #GOATED #WOKE'
    },
    {
        id: uuid(),
        username: 'Bryanbetryin',
        comment: 'I only play ranked conquest. ps rusty sucks lmao'
    },
    {
        id: uuid(),
        username: 'BaliBro',
        comment: 'Yall still play smite? Lmao seattle litty, smile'
    },
    {
        id: uuid(),
        username: 'ToyoRT',
        comment: 'You guys want 2K thanatos or 47K Zeus. lol i suck at Smite'
    }
];

// read all comments
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

// create new comment
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
});

// read one comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

// update a comment
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
});

// delete a comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});


app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});