"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
exports["default"] = (function (url) {
    var connect = function () {
        mongoose_1["default"].connect(url, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(function () {
            return console.log("MongoDB success !");
        })["catch"](function (err) {
            console.log("MongoDB Error !");
        });
    };
    connect();
    mongoose_1["default"].connection.on('disconnected', connect);
});
