import express from 'express';
import Favorites from '../models/favorites';
import * as authenticate from '../authenticate';
import cors from './cors';

const favoriteRouter = express.Router();

// * Get all favorites
favoriteRouter
  .route('/')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, authenticate.verifyUser, async (req, res, next) => {
    try {
      const favorites = await Favorites.find({ author: req.user.id }).lean();
      res.statusCode = 200;
      res.json(favorites);
    } catch (err) {
      next(err);
    }
  });

// * Manipulate to the specific favorite
favoriteRouter
  .route('/:favoriteName')
  .get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
    try {
      const favorite = await Favorites.findOne({ author: req.user.id, name: req.params.favoriteName })
        .populate('user')
        .populate('restaurant')
        .lean();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(favorite);
    } catch (err) {
      next(err);
    }
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
    try {
      let favorite = await Favorites.findOne({ author: req.user.id, name: req.params.favoriteName });
      if (!favorite) {
        favorite = await Favorites.create({
          author: req.user.id,
          coAuthors: [],
          name: req.params.favoriteName,
          restaurants: [],
        });
        const postedFavorite = await Favorites.findById(favorite.id)
          .populate('restaurants')
          .populate('author')
          .populate('coAuthors');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(postedFavorite);
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(null);
      }
    } catch (err) {
      next(err);
    }
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
    try {
      const updatedFavorite = await Favorites.findOneAndUpdate(
        { author: req.user.id, name: req.params.favoriteName },
        { $set: req.body },
        { new: true }
      );
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(updatedFavorite);
    } catch (err) {
      next(err);
    }
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
    try {
      const resp = await Favorites.findOneAndRemove({ author: req.user.id, name: req.params.favoriteName }).lean();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    } catch (err) {
      next(err);
    }
  });

// * Manipulate to restaurant list in the specific favorite
// favoriteRouter
//   .route('/:favoriteName')
//   .options(cors.corsWithOptions, (req, res) => {
//     res.sendStatus(200);
//   })
//   .post(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
//     try {
//       const favorite =
//         (await Favorites.findOne({ user: req.user.id, name: req.params.favoriteName });
//       const getNewRestaurant = favorites.restaurants.every(
//         (restaurant) => restaurant.id.toString('hex') !== req.params.restaurantId
//       );
//       if (getNewRestaurant) {
//         favorites.restaurants.push(req.params.restaurantId);
//         await favorites.save();
//       }
//       const postFavorites = await Favorites.findById(favorites.id)
//         .populate('user')
//         .populate({ path: 'restaurants', populate: { path: 'comments.author' } });
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.json(postFavorites);
//     } catch (err) {
//       next(err);
//     }
//   })
//   .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
//     res.statusCode = 403;
//     res.end(`PUT operaton not supported on /favorites/${req.params.restaurantId}`);
//   })
//   .delete(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {});
// .delete(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
//   try {
//     const favorites = await Favorites.findOne({ user: req.user.id });
//     favorites.restaurants.remove(req.params.restaurantId);
//     await favorites.save();
//     const postFavorites = await Favorites.findById(favorites.id)
//       .populate('user')
//       .populate({ path: 'restaurants', populate: { path: 'comments.author' } });
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.json(postFavorites);
//   } catch (err) {
//     next(err);
//   }
// });

export default favoriteRouter;
