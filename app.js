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
const port = process.env.serverport || 4000;
app.listen(port, () => console.log(`Running on port ${port}...`));
