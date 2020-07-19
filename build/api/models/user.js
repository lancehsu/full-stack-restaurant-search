"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        default: '',
    },
    favorite: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Favorite',
    },
});
UserSchema.plugin(passport_local_mongoose_1.default);
const User = mongoose_1.default.model('User', UserSchema);
exports.default = User;
