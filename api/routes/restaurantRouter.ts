import express from 'express';
import Restaurants from '../models/restaurants';
import { parseTime } from '../util/dateProcess';
import cors from './cors';

const restaurantRouter = express.Router();

restaurantRouter.route('/').get(cors.cors, async (req, res, next) => {
  try {
    const { name, dates, time, am } = req.query;
    const nameReg = new RegExp(name as string, 'i');
    const dateList = dates.length > 0 ? (dates as string).split(',') : [];

    const dateFilter = {};
    dateList.forEach((e) => {
      /**
       * if time.length === 0
       * Just check if that date is available
       */

      dateFilter[`${e}.open`] = {
        $lte: time.length > 0 ? parseTime(time as string, false) : 99,
      };
      // * If that date is not available, `${date}.close` should be -1
      dateFilter[`${e}.close`] = { $gt: time.length > 0 ? parseTime(time as string, false) : 0 };
    });

    const restaurants = await Restaurants.find({
      name: nameReg,
      ...dateFilter,
    }).exec();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(restaurants);
  } catch (err) {
    next(err);
  }
});

export default restaurantRouter;