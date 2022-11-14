const db = require("../configs/database");
const { Sequelize, DataTypes } = require("sequelize");

const tbl_post = db.define(
	"tbl_post",
	{
		post_image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		post_content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
	},
	{
		tableName: "tbl_post",
		createdAt: "created_at",
		updatedAt: "updated_at",
		indexes: [
			{
				unique: true,
				fields: ["post_id"],
			},
		],
		charset: "utf8",
		collate: "utf8_unicode_ci",
	}
);

module.exports = {
	tbl_post,
};
