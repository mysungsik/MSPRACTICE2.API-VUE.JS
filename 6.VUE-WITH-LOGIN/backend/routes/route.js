const express = require("express");
const route = express.Router();
const controller = require("../constrollers/controller");

route.get("/api/account", controller.getAccount);

module.exports = route;
