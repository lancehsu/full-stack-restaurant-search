import express from 'express';
import passport from 'passport';
import User from '../models/user';

import * as authenticate from '../authenticate';
import cors from './cors';

const userRouter = express.Router();

userRouter.get('/me', cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(user);
  } catch (err) {
    next(err);
  }
});

userRouter.post('/signup', cors.corsWithOptions, async (req, res) => {
  try {
    const user = await (User as any).register(
      new User({ name: req.body.name, username: req.body.username }),
      req.body.password
    );
    user.name = req.body.name || '';
    await user.save();
    await passport.authenticate('local');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, status: 'Registration success' });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.json({ err });
  }
});

export default userRouter;
