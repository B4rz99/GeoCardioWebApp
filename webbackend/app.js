const express = require('express');
const cors = require('cors');
const app = express();
const Sequelize = require('sequelize');

require('dotenv').config();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/signUp', require('./routes/signUp'));
app.use('/api/signIn', require('./routes/signIn'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/historics', require('./routes/historics'));
app.use('/api/todos', require('./routes/todos'));
app.use('/api/user', require('./routes/user'));
app.use('/api/root', require('./routes/root'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/refreshtoken', require('./routes/refreshtoken'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});