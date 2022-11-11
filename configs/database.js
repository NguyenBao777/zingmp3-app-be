const { Sequelize } = require("sequelize");
require("dotenv").config();
const conn = new Sequelize(
	process.env.database || "music-app",
	"root" || process.env.username,
	process.env.password || "",
	{
		host: process.env.host || "localhost",
		dialect: "mysql",
	}
);

module.exports = conn;
