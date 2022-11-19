const postModel = require("../models/post.model");
const fs = require("fs");

// add new
exports.addNew = async (req, res) => {
	try {
		const newPost = postModel.tbl_post.build({
			post_image: req?.file?.filename || null,
			post_content: req?.body?.post_content,
			user_id: req?.body?.user_id,
			created_at: new Date(),
			updated_at: new Date(),
		});

		const data = await newPost.save();

		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "data not saved!" });
	}
};
// get all posts
exports.getAll = async (req, res) => {
	try {
		const limit = Number(req.params.limit);
		const pages = Number(req.params.pages);
		const offset = limit * (pages - 1);
		const { count, rows } = await postModel.tbl_post.findAndCountAll({
			limit: limit,
			offset: offset,
		});

		return res.status(200).send({ success: true, message: rows });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "data not found!" });
	}
};

//  get by artistId
exports.getByArtistId = async (req, res) => {
	try {
		const id = Number(req.params.id);
		const data = await postModel.tbl_post.findAll({
			where: { user_id: id },
		});
		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "data not found!" });
	}
};

// delete post
exports.delete = async (req, res) => {
	try {
		const id = Number(req.params.id);
		const deletePost = await postModel.tbl_post.findByPk(id);
		await deletePost.destroy();
		if (deletePost?.post_image !== null) fs.unlinkSync("./public/posts/" + deletePost?.post_image);
		return res.status(200).send({ success: true, message: deletePost });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "data not found!" });
	}
};
// edit
exports.edit = async (req, res) => {
	try {
		const data = await postModel.tbl_post.findByPk(req.body.post_id);
		if (data) {
			await data.update({
				post_content: req.body.post_content,
				updated_at: new Date(),
			});
		}
		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "data not found!" });
	}
};
