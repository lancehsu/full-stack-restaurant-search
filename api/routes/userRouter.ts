import express from 'express';
import passport from 'passport';
import User from '../models/user';

import * as authenticate from '../authenticate';
import cors from './cors';

const userRouter = express.Router();

userRouter.get('/me', cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  try {
    const user = await User.findById((req.user as any).id).lean();
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
      new User({ name: req.body.name || '', username: req.body.username }),
      req.body.password
    );
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

userRouter.post('/login', cors.corsWithOptions, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      next(err);
      return;
    }
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.json({ success: false, status: 'Login failed', err: info });
      return;
    }

    req.logIn(user, (error) => {
      if (error) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: 'Login failed', err: 'Could not login user' });
        return;
      }
      // get JWT by encoding user id
      const jwtToken = authenticate.getToken({ id: (req.user as any).id });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ success: true, name: user.name, token: jwtToken, status: 'Login success' });
    });
  })(req, res, next);
});

userRouter.get('/logout', (req, res, next) => {
  if ((req as any).session) {
    (req as any).session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  } else {
    const err = new Error('You are not logged in!');
    next(err);
  }
});

export default userRouter;
