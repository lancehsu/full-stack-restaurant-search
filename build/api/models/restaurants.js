"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const restaurantSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    0: { open: Number, close: Number },
    1: { open: Number, close: Number },
    2: { open: Number, close: Number },
    3: { open: Number, close: Number },
    4: { open: Number, close: Number },
    5: { open: Number, close: Number },
    6: { open: Number, close: Number },
    favorite: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Favorite' },
});
const Restaurants = mongoose_1.default.model('Restaurant', restaurantSchema);
exports.default = Restaurants;
