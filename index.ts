import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import createError from 'http-errors';

import config from './config';

const app = express();
const { MONGODB_URL, PORT } = config;

const connect = mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

connect.then(
  (db) => {
    console.info('Connected correctly to "Restaurant Search" DB');
  },
  (err) => console.log(err)
);

app.use(express.static(path.resolve('./') + '/build/frontend'));

app.use('/api', (req: Request, res: Response): void => {
  res.send('You have reached the API!');
});

app.get('*', (req: Request, res: Response): void => {
  res.sendFile(path.resolve('./') + '/build/frontend/index.html');
});

// catch 404 and forward to error handler
app.use((_, __, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = err;
  // render the error page
  res.status(err.status ?? 500);
  res.render('error');
});
