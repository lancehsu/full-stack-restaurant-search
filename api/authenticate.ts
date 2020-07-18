import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';

import User from './models/user';
import config from '../config';

const { SECRET_KEY } = config;
/**
 * Issue:  Some issues with @types
 * Workaround: User as any
 */
export const local = passport.use(new LocalStrategy((User as any).authenticate()));

passport.serializeUser((User as any).serializeUser());
passport.deserializeUser((User as any).deserializeUser());
// get JWT by encoding user id followed by secret key
export const getToken = (user) => jwt.sign(user, SECRET_KEY, { expiresIn: '7d' });

const opts: any = {};
// get JWT from bearer of Authentication header
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_KEY;

export const jwtPassport = passport.use(
  new JwtStrategy(opts, async (jwtPayload, done) => {
    console.info('JWT payload: ', jwtPayload);
    // strategy: find if there is a user with the input jwt payload
    try {
      const user = await User.findOne({ _id: jwtPayload.id });
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  })
);

export const verifyUser = passport.authenticate('jwt', { session: false });
