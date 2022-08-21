const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const path = require('path')
const ejs = require('ejs');;
const Post = require('./models/Post');
const postControllers = require('./controllers/postControllers')
const pageControllers = require('./controllers/pageControllers')


// connect db
mongoose.connect('mongodb://localhost/blog-db')

// template engine
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', {
    methods:['GET', 'POST']
}))


// routes
app.get('/', postControllers.GetAllPost);
app.get('/post/:id', postControllers.GetPost);
app.post('/posts', postControllers.CreatePost);
app.put('/post/:id', postControllers.UpdatePost);
app.delete('/post/:id', postControllers.DeletePost);

app.get('/about', pageControllers.GetAboutPage);
app.get('/add-post', pageControllers.GetAddPostPage);
app.get('/post', pageControllers.GetPostPage);
app.get('/post/edit/:id', pageControllers.GetEditPage);

const port = 3000;

app.listen(port, () => {
    console.log(`server ${port} portunda calisti`);
});