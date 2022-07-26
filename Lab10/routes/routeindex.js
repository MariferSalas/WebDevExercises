const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Post = require('../model/post');

//Recibir posts guardados
router.get('/', async function(req,res){
  var posts = await Post.find();
  console.log(posts);
  res.render('index', {posts});
});

//Mostar el formulario para agregar un nuevo post
router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

//Enviar datos para agregar un nuevo post
router.post('/newPost', async (req,res) =>{
  var post = new Post(req.body);
  console.log(post);
  await post.save();
  res.redirect('/');
});

//Mostar el formulario con los datos específicos del id para editar un post.
router.get('/edit/:id',   async(req,res) =>{
  var id = req.params.id;
  var post = await Post.findById(id);
  console.log(post);
  res.render('edit.ejs', {post});
});

//Actualización de datos para edit un post
router.post('/edit/:id',   async(req,res) =>{
  var id = req.params.id;
  console.log(req.body);
  await Post.updateOne({_id: id}, req.body);
  res.redirect('/');
})

//Mostar el formulario con los datos específicos del id para editar un post.
router.get('/delete/:id',   async(req,res) =>{
  var id = req.params.id;
  var post = await Post.findById(id);
  console.log(post);
  res.render('delete.ejs', {post});
});

//Actualización de datos para edit un post
router.post('/delete/:id',   async(req,res) =>{
  var id = req.params.id;
  console.log(req.body);
  await Post.remove({_id: id});
  res.redirect('/');
})

module.exports = router;