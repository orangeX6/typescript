"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var requiredAuth = function (req, res, next) {
    var _a;
    if ((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.loggedIn)
        return next();
    res.status(403).send('<h1>Forbidden</h1>');
};
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        var _a;
        if ((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
            res.status(200).send("\n        <div>\n          <div>You are logged in</div>\n          <a href=\"/auth/logout\">Logout</a>\n        </div>\n      ");
        }
        else {
            res.send("\n        <div>\n          <div>You are not logged in</div>\n          <a href=\"/auth/login\">Login</a>\n        </div>\n      ");
        }
    };
    RootController.prototype.getProtected = function (req, res) {
        res.send('<h1>Welcome to protected route!</h1>');
    };
    __decorate([
        (0, decorators_1.get)('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        (0, decorators_1.get)('/protected'),
        (0, decorators_1.use)(requiredAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        (0, decorators_1.controller)('')
    ], RootController);
    return RootController;
}());
