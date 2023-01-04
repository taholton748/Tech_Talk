const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth= require('../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
      include: [User]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  router.get('/posts/:id', (req, res) => {
    Post.findByPk(req.params.id, {
      include: [User, 
      {
        model: Comment,
        include: [ User ],
      }]
    })
      .then(dbPostData => {
        const posts = dbPostData.get(({ plain: true }));
        res.render('single-post', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  })
  router.get('/login', (req, res) => {
  //   if(req.session.userId) {
  //     res.redirect('/');
  //     return;
  // }
  res.render('login');
})
  router.get('/signup', (req, res) => {
  //   if(req.session.loggedIn) {
  //     res.redirect('/');
  //     return;
  // }
    res.render('signup');
  })
  
  

module.exports = router;