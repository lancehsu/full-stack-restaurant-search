import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import createError from 'http-errors';
import * as fs from 'fs';
import { parseStream } from '@fast-csv/parse';
import compression from 'compression';
import morgan from 'morgan';
import passport from 'passport';

import restaurantRouter from './api/routes/restaurantRouter';
import userRouter from './api/routes/userRouter';
import Restaurant from './api/models/restaurants';
import strToDateProcess from './api/util/strToDateProcess';
import config from './config';

const app = express();
mongoose.plugin((schema) => {
  schema.options.usePushEach = true;
});

const { MONGODB_URL, PORT } = config;

const connect = mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

const initDatabase = false;
connect
  .then(async (db) => {
    console.info('Connected correctly to "Restaurant Search" DB');
    try {
      if (initDatabase) {
        // * Database clear
        await Promise.all(Object.keys(db.models).map((modelName) => db.models[modelName].deleteMany({})));
        // * Read and parse hours.csv
        const restaurantArr = [];
        const nameMap = new Map<string, number>();
        const stream = fs.createReadStream('./hours.csv');
        await parseStream(stream)
          .on('data', async (row) => {
            let name = row[0];
            const nameCount = nameMap.get(name);
            // * Set new name if there are same names
            if (nameCount === undefined) {
              nameMap.set(name, 1);
            } else {
              name = `${name} (${nameCount})`;
              nameMap.set(name, nameCount + 1);
            }

            const dates = row[1];
            const { mon, tue, wed, thu, fri, sat, sun } = strToDateProcess(dates);

            restaurantArr.push({
              name,
              0: sun,
              1: mon,
              2: tue,
              3: wed,
              4: thu,
              5: fri,
              6: sat,
            });
          })
          .on('error', (error) => console.error(error))
          .on('end', async (rowCount: number) => {
            await Restaurant.insertMany(restaurantArr, (err, resturants) => {
              if (err) {
                return console.error(err);
              }
              console.info(`${rowCount} rows are parsed and saved`);
            });
          });
      }
    } catch (err) {
      throw new Error(err);
    }
  })
  .catch((err) => console.error(err));

app.use(morgan('dev'));
app.use(passport.initialize());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve('./') + '/build/frontend'));

app.use('/api/restaurants', restaurantRouter);
app.use('/api/user', userRouter);

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
  res.json({
    message: err.message,
    error: err,
  });
});
