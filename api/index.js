const express = require('express');
const app = express();
const mongoose = require('mongoose');

const getMealRouter = require('./routes/get-meal');
const addMealRouter = require('./routes/add-meal');
const getUserRouter = require('./routes/get-user');
const registerUserRouter = require('./routes/register-user');
const updateUserRouter = require('./routes/update-user');
const deleteUserRouter = require('./routes/delete-user');

app.use(express.json());
app.use('/api/get-meal', getMealRouter);
app.use('/api/add-meal', addMealRouter);
app.use('/api/get-user', getUserRouter);
app.use('/api/register-user', registerUserRouter);
app.use('/api/update-user', updateUserRouter);
app.use('/api/delete-user', deleteUserRouter);

const PORT = 30000;
const DATABASE_URL = 'mongodb://localhost:27017';
const DATABASE_NAME = 'calories-record';

mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'DB connection error'));
database.once('open', () => console.log('DB connection success'));

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
