import express from 'express';
import Restaurants from '../models/restaurants';
import cors from './cors';

const restaurantRouter = express.Router();

restaurantRouter.get('/', cors.cors, async (req, res, next) => {
  try {
    const { name, dates, time } = req.query;

    const dateList = dates.length > 0 ? (dates as string).split(',') : [];

    const hasTime = time.length > 0;
    const currentDateFilter = {};
    const previousDateFilter = {};
    dateList.forEach((e) => {
      if (hasTime) {
        /**
         * If has time filter
         * Check if that day and time is available
         * or
         * the restaurant's business hours of the previous day pass the filter time
         */
        currentDateFilter[`${e}.open`] = {
          $lte: parseFloat(time as string),
        };
        currentDateFilter[`${e}.close`] = { $gt: parseFloat(time as string) };
        previousDateFilter[`${(parseInt(e) + 6) % 7}.close`] = { $gt: parseFloat(time as string) + 24 };
      } else {
        /**
         * If no time filter
         * Check if that day is available
         * or
         * the restaurant's business hours of the previous day passes midnight
         */
        currentDateFilter[`${e}.open`] = {
          $lte: 99,
        };
        // * If that date is not available, `${date}.close` should be -1
        currentDateFilter[`${e}.close`] = { $gt: 0 };
        previousDateFilter[`${(parseInt(e) + 6) % 7}.close`] = { $gt: 24 };
      }
    });
    const searchObject = {
      $or: [currentDateFilter, previousDateFilter],
      ...(name !== '' && { name: new RegExp(name as string, 'i') }),
    };
    // console.dir(searchObject['$or'][0]);
    // console.dir(searchObject['$or'][1]);

    const restaurants = await Restaurants.find(searchObject).limit(50).lean().exec();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(restaurants);
  } catch (err) {
    next(err);
  }
});

export default restaurantRouter;
