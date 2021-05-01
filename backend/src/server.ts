import 'reflect-metadata';
import express from 'express';

const app = express();

app.get('/', () => {
    console.log('banana');
});

app.listen(3001, () => {
    console.log('Server started!');
});
