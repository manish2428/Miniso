const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../middleware/keys');

//register module
exports.registerUser = async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!email) {
    return res.json({ message: 'Please provide a email address.' });
  }

  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(403).json({ message: 'User already exists' });
  }
  // if (email.length() > 254) return res.send('Invalid email address');

  //   console.log({ name, email, password, phone });
  try {
    const saltRounds = 12;
    const myPlaintextPassword = password;

    const newUser = new User({
      name,
      email,
      password,
      phone,
    });

    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
        newUser.password = hash;
        // console.log(newUser.password);
        newUser.save().then((user) => {
          console.log(user);
          return res.status(200).json({
            message: 'User successfully created',
          });
        });
      });
    });
    name;
  } catch (err) {
    res.status(401).json({
      message: 'User not created!',
      error: error.mesage,
    });
  }
};

//signin module
exports.signin = async (req, res) => {
  let { email, password } = req.body;
  //encrypting the password
  const saltRounds = 12;
  const user = await User.findOne({ email });
  // console.log(user);
  //   console.log(user.password, hash);
  if (!user) {
    return res.status(403).json({ message: 'No user with this email' });
  }
  if (user.isDel === true && user.isAdmin === false) {
    return res.json({ message: 'User not found' });
  }

  bcrypt
    .compare(password, user.password)
    .then((isMatch) => {
      if (isMatch) {
        user.password = '';
        const payload = {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          isDel: user.isDel,
          isAdmin: user.isAdmin,
          isRecruiter: user.isRecruiter,
        };
        // console.log(keys);
        const token = jwt.sign(payload, keys.secretOrKey, {
          expiresIn: '1d',
        });
        // req.headers.authorization = 'Bearer ' + token;
        // console.log(req.headers);
        return res.status(200).json({
          success: true,
          token: 'Bearer ' + token,
          message: 'Successfully logged in!!!',
        });
        // return res.status(200).json(user);
      } else
        return res.status(404).json({ msg: 'Username or password incorrect' });
    })
    .catch((err) => console.log(err));
};

exports.jwtVerify = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // console.log(authHeader);
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ msg: 'User not validated. Log in again!' });
  }

  jwt.verify(token, keys.secretOrKey, (err, user) => {
    // console.log(token);
    if (err) return res.status(403).json({ msg: err.message });
    req.user = user;
  });
  next();
};

exports.getUser = (req, res) => {
  res.json(req.user);
};

exports.getUsers = async (req, res) => {
  await User.find()
    .select('-password')
    .then((data) => {
      return res.json(data);
    });
};

exports.updateUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  await User.findOneAndUpdate(
    { id: user._id },
    { $set: { name: user.name, email: user.email, phone: user.phone } }
  )
    .then((user) => {
      user.password = '';
      res.json(user);
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = async (req, res) => {
  const { user } = req;
  await User.findOneAndUpdate({ id: user._id }, { $set: { isDel: true } })
    .then((user) => {
      user.password = ' ';
      res.json(user);
    })
    .catch((err) => console.log(err));
};

exports.logout = (req, res) => {
  req.headers['authorization'] = null;
  req.user = null;
  res.json({ message: 'logged out' });
};
