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
const express_1 = __importDefault(require("express"));
const restaurants_1 = __importDefault(require("../models/restaurants"));
const cors_1 = __importDefault(require("./cors"));
const restaurantRouter = express_1.default.Router();
restaurantRouter.get('/', cors_1.default.cors, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, dates, time } = req.query;
        const dateList = dates.length > 0 ? dates.split(',') : [];
        const dateFilter = {};
        dateList.forEach((e) => {
            /**
             * if time.length === 0
             * Just check if that date is available
             */
            dateFilter[`${e}.open`] = {
                $lte: time.length > 0 ? parseInt(time) : 99,
            };
            // * If that date is not available, `${date}.close` should be -1
            dateFilter[`${e}.close`] = { $gt: time.length > 0 ? parseInt(time) : 0 };
        });
        const searchObject = Object.assign(Object.assign({}, dateFilter), (name !== '' && { name: new RegExp(name, 'i') }));
        const restaurants = yield restaurants_1.default.find(searchObject).limit(50).lean().exec();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(restaurants);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = restaurantRouter;
