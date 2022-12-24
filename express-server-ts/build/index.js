"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/RootController");
require("./controllers/UserController");
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json({}));
app.use((0, cookie_session_1.default)({ keys: ['wano-kuni'] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () { return console.log("Listening on port 3000..."); });
