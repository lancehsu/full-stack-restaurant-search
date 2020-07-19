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
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const http_errors_1 = __importDefault(require("http-errors"));
const fs = __importStar(require("fs"));
const parse_1 = require("@fast-csv/parse");
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = __importDefault(require("passport"));
const restaurantRouter_1 = __importDefault(require("./api/routes/restaurantRouter"));
const userRouter_1 = __importDefault(require("./api/routes/userRouter"));
const favoriteRouter_1 = __importDefault(require("./api/routes/favoriteRouter"));
const restaurants_1 = __importDefault(require("./api/models/restaurants"));
const strToDateProcess_1 = __importDefault(require("./api/util/strToDateProcess"));
const config_1 = __importDefault(require("./config"));
const app = express_1.default();
mongoose_1.default.plugin((schema) => {
    schema.options.usePushEach = true;
});
const { MONGODB_URL, PORT } = config_1.default;
const connect = mongoose_1.default.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
const initDatabase = true;
connect
    .then((db) => __awaiter(void 0, void 0, void 0, function* () {
    console.info('Connected correctly to "Restaurant Search" DB');
    try {
        if (initDatabase) {
            // * Database clear
            yield Promise.all(Object.keys(db.models).map((modelName) => db.models[modelName].deleteMany({})));
            // * Read and parse hours.csv
            const restaurantArr = [];
            const nameMap = new Map();
            const stream = fs.createReadStream('./hours.csv');
            yield parse_1.parseStream(stream)
                .on('data', (row) => __awaiter(void 0, void 0, void 0, function* () {
                let name = row[0];
                const nameCount = nameMap.get(name);
                // * Set new name if there are same names
                if (nameCount === undefined) {
                    nameMap.set(name, 1);
                }
                else {
                    name = `${name} (${nameCount})`;
                    nameMap.set(name, nameCount + 1);
                }
                const dates = row[1];
                const { mon, tue, wed, thu, fri, sat, sun } = strToDateProcess_1.default(dates);
                restaurantArr.push({
                    name,
                    0: sun,
                    1: mon,
                    2: tue,
                    3: wed,
                    4: thu,
                    5: fri,
                    6: sat,
                });
            }))
                .on('error', (error) => console.error(error))
                .on('end', (rowCount) => __awaiter(void 0, void 0, void 0, function* () {
                yield restaurants_1.default.insertMany(restaurantArr, (err, resturants) => {
                    if (err) {
                        return console.error(err);
                    }
                    console.info(`${rowCount} rows are parsed and saved`);
                });
            }));
        }
    }
    catch (err) {
        throw new Error(err);
    }
}))
    .catch((err) => console.error(err));
app.use(morgan_1.default('dev'));
app.use(passport_1.default.initialize());
app.use(compression_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.resolve('./') + '/build/frontend'));
app.use('/api/restaurants', restaurantRouter_1.default);
app.use('/api/favorites', favoriteRouter_1.default);
app.use('/api/user', userRouter_1.default);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve('./') + '/build/frontend/index.html');
});
// catch 404 and forward to error handler
app.use((_, __, next) => {
    next(http_errors_1.default(404));
});
// error handler
app.use((err, req, res, next) => {
    var _a;
    res.locals.message = err.message;
    res.locals.error = err;
    // render the error page
    res.status((_a = err.status) !== null && _a !== void 0 ? _a : 500);
    res.json({
        message: err.message,
        error: err,
    });
});
