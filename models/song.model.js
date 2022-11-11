const db = require("../configs/database");
const { Sequelize, DataTypes } = require("sequelize");

const tbl_song = db.define(
	"tbl_song",
	{
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
		song_listened: {
			type: DataTypes.NUMBER,
			allowNull: true,
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
		artist_id: {
			type: DataTypes.NUMBER,
			allowNull: true,
		},
		artist_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category_id: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
	},
	{
		tableName: "tbl_song",
		createdAt: "created_at",
		updatedAt: "updated_at",
		indexes: [
			{
				unique: true,
				fields: ["song_id"],
			},
		],
		charset: "utf8",
		collate: "utf8_unicode_ci",
	}
);

module.exports = {
	tbl_song,
};
