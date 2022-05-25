const Post = require('../models/postSchema');
const Profile = require('../models/profileSchema');

exports.createPost = (req, res) => {
  const newPost = new Post({
    text: req.body.text,
    name: req.user.name,
    user: req.user.id,
  });

  newPost
    .save()
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
};

exports.getPosts = (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts))
    .catch((err) => res.json({ nopostsfound: 'No posts found' }));
};

exports.getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.json({ nopostfound: 'No post found with that Id' }));
};

exports.deletePost = (req, res) => {
  Profile.findOne({ user: req.user.id }).then((profile) => {
    Post.findById(req.params.id).then((post) => {
      if (!post) return res.json({ msg: 'No such post here.' });
      if (post.user.toString() !== req.user.id) {
        return res.status(401).json({ notauthorised: 'User not authorised' });
      }

      post
        .remove()
        .then(() => res.json({ success: true }))
        .catch((err) =>
          res.status(404).json({ postnotfound: 'No post found' })
        );
    });
  });
};

exports.likePost = (req, res) => {
  Profile.findOne({ user: req.user.id }).then((profile) => {
    Post.findById(req.params.id)
      .then((post) => {
        if (
          post.likes.filter((like) => like.user.toString() === req.user.id)
            .length > 0
        ) {
          return res
            .status(400)
            .json({ alreadyliked: 'User already liked this post' });
        }

        post.likes.unshift({ user: req.user.id });

        post
          .save()
          .then((posts) => res.json(posts))
          .catch((err) => console.log(err));
      })
      .catch((err) => res.status(404).json({ postnotfound: 'No post found' }));
  });
};

exports.unlikePost = (req, res) => {
  Profile.findOne({ user: req.user.id }).then((profile) => {
    Post.findById(req.params.id)
      .then((post) => {
        if (
          post.likes.filter((like) => like.user.toString() === req.user.id)
            .length === 0
        ) {
          return res
            .status(400)
            .json({ notliked: 'You have not liked this post' });
        }

        const removeIndex = post.likes
          .map((item) => item.user.toString())
          .indexOf(req.user.id);

        post.likes.splice(removeIndex, 1);

        post.save().then((post) => res.json(post));
      })
      .catch((err) => res.status(404).json({ postnotfound: 'No post found' }));
  });
};

exports.createComment = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      const { errors, isValid } = validatePostInput(req.body);

      if (!isValid) {
        return res.status(404).json(errors);
      }

      const newComment = {
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id,
      };

      post.comments.unshift(newComment);

      post.save().then((post) => res.json(post));
    })
    .catch((err) => res.status(404).json({ postnotfound: 'No post found' }));
};

exports.deleteComment = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      if (
        post.comments.filter(
          (com) => com._id.toString() === req.params.comment_id
        ).length === 0
      ) {
        return res
          .status(404)
          .json({ commentnotexists: 'Comment does not exist' });
      }

      const removeIndex = post.comments
        .map((item) => item._id.toString())
        .indexOf(req.params.comment_id);

      post.comments.splice(removeIndex, 1);

      post.save().then((post) => res.json(post));
    })
    .catch((err) => res.status(404).json({ postnotfound: 'No post found' }));
};
