const express = require("express");
const route = express.Router();
const controller = require("../constrollers/controller");

route.get("/api/account", controller.getAccount);

route.post("/api/account", controller.login);

module.exports = route;
