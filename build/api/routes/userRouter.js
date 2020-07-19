"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../models/user"));
const authenticate = __importStar(require("../authenticate"));
const cors_1 = __importDefault(require("./cors"));
const userRouter = express_1.default.Router();
userRouter.get('/me', cors_1.default.corsWithOptions, authenticate.verifyUser, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findById(req.user.id).lean();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    }
    catch (err) {
        next(err);
    }
}));
userRouter.post('/signup', cors_1.default.corsWithOptions, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.register(new user_1.default({ name: req.body.name || '', username: req.body.username }), req.body.password);
        yield user.save();
        yield passport_1.default.authenticate('local');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'Registration success' });
    }
    catch (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err });
    }
}));
userRouter.post('/login', cors_1.default.corsWithOptions, (req, res, next) => {
    passport_1.default.authenticate('local', (err, user, info) => {
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
            const jwtToken = authenticate.getToken({ id: req.user.id });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, name: user.name, token: jwtToken, status: 'Login success' });
        });
    })(req, res, next);
});
userRouter.get('/logout', (req, res, next) => {
    if (req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
    }
    else {
        const err = new Error('You are not logged in!');
        next(err);
    }
});
exports.default = userRouter;
