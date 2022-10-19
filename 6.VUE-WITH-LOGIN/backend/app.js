const express = require("express");
const app = express();

const cors = require("./middlewares/CORS")
const route = require("./routes/route");

app.use(cors)
app.use(route)

app.listen(3000);
