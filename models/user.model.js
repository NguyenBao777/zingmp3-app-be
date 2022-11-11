const db = require("../configs/database");
const { Sequelize, DataTypes } = require("sequelize");

const tbl_user = db.define(
	"tbl_user",
	{
		user_username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_birthday: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		user_country: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		user_desc: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		user_role: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_avatar: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "tbl_user",
		createdAt: "created_at",
		updatedAt: "updated_at",
		indexes: [
			{
				unique: true,
				fields: ["user_id"],
			},
		],
		charset: "utf8",
		collate: "utf8_unicode_ci",
	}
);

module.exports = {
	tbl_user,
};
