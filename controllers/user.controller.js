const userModel = require("../models/user.model");
const md5 = require("md5");
const fs = require("fs");
const Sequelize = require("sequelize");
const op = Sequelize.Op;

exports.addNew = async (req, res) => {
	try {
		const newUser = userModel.tbl_user.build({
			user_username: req.body.user_username,
			user_password: md5(req.body.user_password),
			user_name: req.body.user_name,
			user_role: req.body.user_role,
			created_at: new Date(),
			updated_at: new Date(),
		});
		const data = await newUser.save();
		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Error saving user." });
	}
};

exports.login = async (req, res) => {
	try {
		const data = await userModel.tbl_user.findOne({
			where: {
				user_username: req.params.username,
				user_password: md5(req.params.password),
			},
		});

		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not found!" });
	}
};

exports.edit = async (req, res) => {
	try {
		const data = await userModel.tbl_user.findByPk(req.body.user_id);
		data.update({
			user_name: req.body.user_name,
			user_avatar: req?.file !== undefined ? req.file?.filename : data?.user_avatar,
			user_desc: req.body.user_desc,
			user_birthday: req.body.user_birthday,
			user_country: req.body.user_country,
			updated_at: new Date(),
		});

		if (req?.file !== undefined && data?.user_avatar) fs.unlinkSync("./public/users/" + req?.body?.old_img);

		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "User edit false!" });
	}
};

// getone
exports.getOne = async (req, res) => {
	try {
		const id = Number(req.params.id);
		const data = await userModel.tbl_user.findByPk(id);

		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "User edit false!" });
	}
};

// search

exports.search = async (req, res) => {
	const keywords = req.params.keywords;
	try {
		const data = await userModel.tbl_user.findAll({
			where: {
				[op.or]: [
					{
						user_name: { [op.like]: `%${keywords}%` },
						user_role: "artist",
					},
					{
						user_desc: { [op.like]: `%${keywords}%` },
						user_role: "artist",
					},
				],
			},
		});

		if (data.length > 0) {
			return res.status(200).send({ success: true, message: data });
		}
		return res.status(200).send({ success: false, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not found!" });
	}
};

// get all
exports.getAll = async (req, res) => {
	try {
		const data = await userModel.tbl_user.findAll({
			where: { user_role: "artist" },
			limit: 10,
		});
		if (data.length > 0) {
			return res.status(200).send({ success: true, message: data });
		}
		return res.status(200).send({ success: false, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not found!" });
	}
};
