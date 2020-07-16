import express from 'express';
import mongoose from 'mongoose';

import { Server } from './api/Server';
import config from './config';

const app = express();

const { MONGODB_URL } = config;
const connect = mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

connect.then(
  (db) => {
    console.info('Connected correctly to "Restaurant Search" DB');
  },
  (err) => console.log(err)
);

const port = 8000;

const server = new Server(app);
server.start(port);
