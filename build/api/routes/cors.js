"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const whitelist = ['http://localhost:3000'];
const corsOptionsDelegate = (req, cb) => {
    console.info(req.header('Origin'));
    const corsOptions = whitelist.includes(req.header('Origin')) ? { origin: true } : { origin: false };
    cb(null, corsOptions);
};
exports.default = { cors: cors_1.default(), corsWithOptions: cors_1.default(corsOptionsDelegate) };
