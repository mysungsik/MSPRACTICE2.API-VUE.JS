const express = require("express");
const route = express.Router();
const controller = require("../constrollers/controller");

route.get("/api/memos", controller.getMemos);

route.post("/api/memos", controller.pushMemos);

route.get("/api/allmemos", controller.getAllmemos);

module.exports = route;
