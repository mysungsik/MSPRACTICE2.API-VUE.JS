const express = require("express");
const app = express();

const cors = require("./middlewares/CORS");
const route = require("./routes/route");
const db = require("./database/database");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors);
app.use(route);

db.connectMongodb().then(function () {
  app.listen(3000);
});
