const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const port = 8080;
const userRouter = require('./routes/userRoutes');
const profileRouter = require('./routes/profileRoutes');
const postRouter = require('./routes/postRoutes');

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db =
  'mongodb+srv://mini_so:mini_so@cluster0.o9sfk.mongodb.net/Inno_miniso';

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/post', postRouter);

app.listen(port, () => console.log('Connected on port : ' + port));
