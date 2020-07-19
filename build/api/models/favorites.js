"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const favoriteSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    restaurants: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Restaurant' }],
    author: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
    coAuthors: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });
const Favorites = mongoose_1.default.model('Favorite', favoriteSchema);
exports.default = Favorites;
