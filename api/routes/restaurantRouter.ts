import express from 'express';
import { decodedTextSpanIntersectsWith } from 'typescript';
import Restaurants from '../models/restaurants';
import cors from './cors';

const restaurantRouter = express.Router();

restaurantRouter.get('/', cors.cors, async (req, res, next) => {
  try {
    const { name, dates, time } = req.query;

    const dateList = dates.length > 0 ? (dates as string).split(',') : [];

    const dateFilter = {};
    dateList.forEach((e) => {
      /**
       * if time.length === 0
       * Just check if that date is available
       */
      dateFilter[`${e}.open`] = {
        $lte: time.length > 0 ? parseInt(time as string) : 99,
      };
      // * If that date is not available, `${date}.close` should be -1
      dateFilter[`${e}.close`] = { $gt: time.length > 0 ? parseInt(time as string) : 0 };
    });
    const searchObject = { ...dateFilter, ...(name !== '' && { name: new RegExp(name as string, 'i') }) };

    const restaurants = await Restaurants.find(searchObject).limit(20).lean().exec();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(restaurants);
  } catch (err) {
    next(err);
  }
});

export default restaurantRouter;
