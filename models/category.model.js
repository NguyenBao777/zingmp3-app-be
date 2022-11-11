const db = require("../configs/database");
const { Sequelize, DataTypes } = require("sequelize");

const tbl_category = db.define(
	"tbl_category",
	{
		category_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category_img: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category_desc: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category_status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "tbl_category",
		timestamps: false,
		indexes: [
			{
				unique: true,
				fields: ["category_id"],
			},
		],
		charset: "utf8",
		collate: "utf8_unicode_ci",
	}
);

module.exports = {
	tbl_category,
};
