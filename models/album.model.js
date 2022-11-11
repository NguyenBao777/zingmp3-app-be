const db = require("../configs/database");
const { Sequelize, DataTypes } = require("sequelize");

const tbl_album = db.define(
	"tbl_album",
	{
		user_id: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		album_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		album_code: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		album_desc: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		album_cover: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		album_status: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "tbl_album",
		createdAt: "created_at",
		updatedAt: "updated_at",
		indexes: [
			{
				unique: true,
				fields: ["album_id"],
			},
		],
		charset: "utf8",
		collate: "utf8_unicode_ci",
	}
);

module.exports = {
	tbl_album,
};
