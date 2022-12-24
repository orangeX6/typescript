"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.put = exports.del = exports.post = exports.patch = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetaDataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetaDataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.patch = routeBinder(Methods_1.Methods.patch);
exports.post = routeBinder(Methods_1.Methods.post);
exports.del = routeBinder(Methods_1.Methods.del);
exports.put = routeBinder(Methods_1.Methods.put);
