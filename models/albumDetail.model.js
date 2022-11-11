const db = require("../configs/database");
const { Sequelize, DataTypes } = require("sequelize");

const tbl_album_detail = db.define(
	"tbl_album_detail",
	{
		album_code: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		song_id: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		song_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		song_cover: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		song_path: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		song_lyric: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		song_duration: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		author_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		artist_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		author_id: {
			type: DataTypes.NUMBER,
			allowNull: true,
		},
		artist_id: {
			type: DataTypes.NUMBER,
			allowNull: true,
		},
		category_id: {
			type: DataTypes.NUMBER,
			allowNull: true,
		},
	},
	{
		tableName: "tbl_album_detail",
		timestamps: false,
		indexes: [
			{
				unique: true,
				fields: ["album_detail_id"],
			},
		],
		charset: "utf8",
		collate: "utf8_unicode_ci",
	}
);

module.exports = {
	tbl_album_detail,
};
