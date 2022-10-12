const express = require("express")
const route = express.Router()

const quoteController = require("../contorller/quote-controller")

// 결국 이게 API가 된다.
// METHOD("get") 와 URL("quote") 가 합쳐진, 도착하면, 데이터를 반환해주는 것

route.get("/", quoteController.simpleQuote)

module.exports = route