const Post = require('../models/Post');

exports.GetAllPost = async (req, res) => {
    const posts = await Post.find({}).sort('-dateCreated');
    res.render('index', {
        posts
    });
};


exports.GetPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {
        post
    })

};


exports.CreatePost =async (req, res) => {
    await Post.create(req.body)
    res.redirect('/');
};


exports.UpdatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();

    res.redirect(`/post/${req.params.id}`)
};


exports.DeletePost = async (req, res) => {
    const deletePost = await req.params.id;
    await Post.findByIdAndRemove(deletePost)
    res.redirect('/')
};