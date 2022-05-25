const router = require('express').Router();
const {
  registerUser,
  signin,
  jwtVerify,
  updateUser,
  deleteUser,
  logout,
  getUsers,
  getUser,
} = require('../controller/userController');

// http://localhost:8080/user/register
router.post('/register', registerUser);

// http://localhost:8080/user/login
router.post('/login', signin);

router.get('/', jwtVerify, getUser);

router.get('/all', jwtVerify, getUsers);

// update
// http://localhost:8080/user/update
router.put('/update', jwtVerify, updateUser);

// delete
router.delete('/delete', jwtVerify, deleteUser);

router.post('/logout', jwtVerify, logout);

module.exports = router;
