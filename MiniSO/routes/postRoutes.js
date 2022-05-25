const router = require('express').Router();
const {
  createPost,
  deletePost,
  getPosts,
  getPost,
  likePost,
  unlikePost,
  createComment,
  deleteComment,
} = require('../controller/postController');
const { jwtVerify } = require('../controller/userController');

router.post('/', jwtVerify, createPost);

router.get('/', getPosts);

router.get('/:id', getPost);

router.delete('/:id', jwtVerify, deletePost);

router.post('/like/:id', jwtVerify, likePost);

router.post('/unlike/:id', jwtVerify, unlikePost);

router.post('/comment/:id', jwtVerify, createComment);

router.delete('/comment/:id/:comment_id', jwtVerify, deleteComment);

module.exports = router;
