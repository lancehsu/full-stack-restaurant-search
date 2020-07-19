"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = exports.jwtPassport = exports.getToken = exports.local = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const passport_jwt_1 = require("passport-jwt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("./models/user"));
const config_1 = __importDefault(require("../config"));
const { SECRET_KEY } = config_1.default;
/**
 * Issue:  Some issues with @types
 * Workaround: User as any
 */
exports.local = passport_1.default.use(new passport_local_1.Strategy(user_1.default.authenticate()));
passport_1.default.serializeUser(user_1.default.serializeUser());
passport_1.default.deserializeUser(user_1.default.deserializeUser());
// get JWT by encoding user id followed by secret key
exports.getToken = (user) => jsonwebtoken_1.default.sign(user, SECRET_KEY, { expiresIn: '7d' });
const opts = {};
// get JWT from bearer of Authentication header
opts.jwtFromRequest = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_KEY;
exports.jwtPassport = passport_1.default.use(new passport_jwt_1.Strategy(opts, (jwtPayload, done) => __awaiter(void 0, void 0, void 0, function* () {
    console.info('JWT payload: ', jwtPayload);
    // strategy: find if there is a user with the input jwt payload
    try {
        const user = yield user_1.default.findOne({ _id: jwtPayload.id });
        return done(null, user);
    }
    catch (err) {
        return done(err, false);
    }
})));
exports.verifyUser = passport_1.default.authenticate('jwt', { session: false });
