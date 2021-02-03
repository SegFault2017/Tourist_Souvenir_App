"use strict";
exports.__esModule = true;
var routes_1 = require("./../api/logEntry/routes");
exports["default"] = (function (app) {
    app.use("/api/logs", routes_1["default"]);
});
