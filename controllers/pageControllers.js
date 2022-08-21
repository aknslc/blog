const Post = require('../models/Post');

exports.GetAboutPage =(req, res) => {
    res.render('about');
};


exports.GetAddPostPage = (req, res) => {
    res.render('add_post');
};

exports.GetPostPage = (req, res) => {
    res.render('post');
};

exports.GetEditPage = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render('edit', {
        post
    });
}