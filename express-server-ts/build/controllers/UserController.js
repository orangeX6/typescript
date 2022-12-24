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
var UserController = /** @class */ (function () {
    function UserController() {
    }
    // @get('/')
    // add(a: number, b: number): number {
    //   return a + b;
    // }
    // @use(logger)
    UserController.prototype.getLogin = function (req, res) {
        // res.send('Hello there ');
        res.send("\n      <form method='POST'>\n        <div>\n          <label>Email</label>\n          <input name = \"email\"/>\n        </div>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" type=\"password\"/>\n        </div>\n        <button>Submit</button>\n      </form>\n    ");
    };
    UserController.prototype.postLogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email === 'hi@hi.com' && password === 'onigiri') {
            //   mark this person as logged in
            req.session = { loggedIn: true };
            //redirect to home
            res.redirect('/');
        }
        else {
            res.status(401).send('Invalid email or password');
        }
    };
    UserController.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    __decorate([
        (0, decorators_1.get)('/login')
        // @use(logger)
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getLogin", null);
    __decorate([
        (0, decorators_1.post)('/login'),
        (0, decorators_1.bodyValidator)('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "postLogin", null);
    __decorate([
        (0, decorators_1.get)('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getLogout", null);
    UserController = __decorate([
        (0, decorators_1.controller)('/auth')
    ], UserController);
    return UserController;
}());
