const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('../routes/auth');
const clientRouter = require('../routes/client');
const PORT = 3000;
const app = express();
const DB = 'mongodb+srv://cmjunior:hw4kFG0V1XHz9F2g@cluster0.hatgn.mongodb.net/?retryWrites=true&w=majority';

mongoose
    .connect(DB)
    .then(() => {
        console.log('Database connected');
    }).catch((e) => {
        console.error(e);
    });

app.use(express.json());
app.use(authRouter);
app.use(clientRouter);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`listening on port ${PORT}`);
});

// cmjunior
// hw4kFG0V1XHz9F2g