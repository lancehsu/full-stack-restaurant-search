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
const favorites_1 = __importDefault(require("../models/favorites"));
const authenticate = __importStar(require("../authenticate"));
const cors_1 = __importDefault(require("./cors"));
const favoriteRouter = express_1.default.Router();
// * Get all favorites
favoriteRouter
    .route('/')
    .options(cors_1.default.corsWithOptions, (req, res) => {
    res.sendStatus(200);
})
    .get(cors_1.default.cors, authenticate.verifyUser, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const favorites = yield favorites_1.default.find({ author: req.user.id })
            .populate('author')
            .populate('restaurants')
            .lean();
        res.statusCode = 200;
        res.json(favorites);
    }
    catch (err) {
        next(err);
    }
}));
// * Manipulate to the specific favorite
favoriteRouter
    .route('/:favoriteName')
    .get(cors_1.default.corsWithOptions, authenticate.verifyUser, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const favorite = yield favorites_1.default.findOne({ author: req.user.id, name: req.params.favoriteName })
            .populate('author')
            .populate('restaurant')
            .lean();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(favorite);
    }
    catch (err) {
        next(err);
    }
}))
    .post(cors_1.default.corsWithOptions, authenticate.verifyUser, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let favorite = yield favorites_1.default.findOne({ author: req.user.id, name: req.params.favoriteName });
        if (!favorite) {
            favorite = yield favorites_1.default.create({
                author: req.user.id,
                coAuthors: [],
                name: req.params.favoriteName,
                restaurants: [],
            });
            const postedFavorite = yield favorites_1.default.findById(favorite.id)
                .populate('restaurants')
                .populate('author')
                .populate('coAuthors');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(postedFavorite);
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(null);
        }
    }
    catch (err) {
        next(err);
    }
}))
    .put(cors_1.default.corsWithOptions, authenticate.verifyUser, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // * If remove === true, remove restaurant
        const { name, restaurant, remove } = req.body;
        if (name === undefined) {
            // * Update restaurants
            const favorite = yield favorites_1.default.findOne({
                author: req.user.id,
                name: req.params.favoriteName,
            }).populate('restaurants');
            const idx = favorite.restaurants.findIndex((e) => e.name === restaurant.name);
            if (remove) {
                favorite.restaurants = favorite.restaurants
                    .slice(0, idx)
                    .concat(favorite.restaurants.slice(idx + 1));
            }
            else if (idx === -1)
                favorite.restaurants.push(restaurant);
            yield favorite.save();
            const resp = yield favorites_1.default.findById(favorite.id).populate('restaurants');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }
        else {
            if (name === '') {
                res.statusCode = 405;
                res.setHeader('Content-Type', 'application/json');
                res.json({ success: false, status: 'Rename failed', err: 'empty name is NOT valid' });
                return;
            }
            // * Update name
            const updatedFavorite = yield favorites_1.default.findOneAndUpdate({ author: req.user.id, name: req.params.favoriteName }, { $set: { name } }, { new: true })
                .populate('restaurants')
                .populate('author')
                .populate('coAuthors')
                .lean();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(updatedFavorite);
        }
    }
    catch (err) {
        next(err);
    }
}))
    .delete(cors_1.default.corsWithOptions, authenticate.verifyUser, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield favorites_1.default.findOneAndRemove({
            author: req.user.id,
            name: req.params.favoriteName,
        }).lean();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = favoriteRouter;
