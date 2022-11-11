const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const path = require("path");
app.use("/public", express.static(path.join(__dirname, "./public")));

const webRoute = require("./routes/web");
app.use("/", webRoute);

app.listen(4000, () => console.log("Running on port 4000..."));
