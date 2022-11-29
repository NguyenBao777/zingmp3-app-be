const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
const path = require("path");
app.use("/public", express.static(path.join(__dirname, "./public")));

const webRoute = require("./routes/web");
app.get("/", (req, res) => {
	return res.status(200).send({ message: "server zingmp3-app" });
});
app.use("/", webRoute);
const port = process.env.serverport || 4000;
app.listen(port, () => console.log(`Running on port ${port}...`));
