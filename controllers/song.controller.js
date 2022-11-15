const songModel = require("../models/song.model");
const categoryModel = require("../models/category.model");
const Sequelize = require("sequelize");
const op = Sequelize.Op;
// add new song
exports.addNew = async (req, res) => {
	try {
		const newSong = songModel.tbl_song.build({
			song_name: req.body.song_name,
			song_cover: req.files[0].filename,
			song_path: req.files[1].filename,
			song_listened: 0,
			song_lyric: req.body.song_lyric,
			song_duration: req.body.song_duration,
			category_id: req.body.category_id,
			author_id: null,
			author_name: req.body.song_author,
			artist_id: req.body.artist_id,
			artist_name: req.body.song_artist,
			created_at: new Date(),
			updated_at: new Date(),
		});
		const data = await newSong.save();
		res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		res.status(200).send({ success: false, message: "upload error:" + err });
	}
};

exports.getNew = async (req, res) => {
	try {
		const pages = Number(req.params.pages);
		const limit = Number(req.params.limit);
		const offset = (pages - 1) * limit;
		const { count, rows } = await songModel.tbl_song.findAndCountAll({
			order: [["id", "DESC"]],
			limit: limit,
			offset: offset,
		});
		if (rows.length > 0) {
			res.status(200).send({ success: true, message: rows, total: count });
		} else {
			res.status(200).send({ success: false, message: "Data not found!" });
		}
	} catch (err) {
		console.log(err);
		res.status(200).send({ success: false, message: "Data not found!" });
	}
};
// get top 100
exports.getTop = async (req, res) => {
	try {
		const data = await songModel.tbl_song.findAll({
			order: [["song_listened", "DESC"]],
			limit: 100,
		});
		if (data.length > 0) {
			res.status(200).send({ success: true, message: data });
		} else {
			res.status(200).send({ success: false, message: "Data not found!" });
		}
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not found!" });
	}
};
// update listened
exports.updateListened = async (req, res) => {
	console.log(req.body.id);
	try {
		const data = await songModel.tbl_song.findByPk(req.body.id);
		data.update({
			song_listened: (data.song_listened += 1),
		});
		return res.status(200).send({ success: true, message: "Update successfuly!" });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not found!" });
	}
};

// get chart
exports.getChart = async (req, res) => {
	console.log("isRun");
	try {
		const categoryID = await categoryModel.tbl_category.findOne({
			where: {
				category_name: req.params.category_name,
			},
		});
		const data = await songModel.tbl_song.findAll({
			where: {
				category_id: categoryID.id,
			},
			order: [["song_listened", "DESC"]],
			limit: 10,
		});
		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not found!" });
	}
};

// search
exports.search = async (req, res) => {
	const keywords = req.params.keywords;
	try {
		const data = await songModel.tbl_song.findAll({
			where: {
				[op.or]: [
					{
						song_name: { [op.like]: `%${keywords}%` },
					},
					{
						song_lyric: { [op.like]: `%${keywords}%` },
					},
					{
						artist_name: { [op.like]: `%${keywords}%` },
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

// get by category
exports.getByCategory = async (req, res) => {
	try {
		const id = Number(req.params.id);
		const limit = Number(req.params.limit);
		const pages = Number(req.params.pages);
		const offset = (pages - 1) * limit;
		const { count, rows } = await songModel.tbl_song.findAndCountAll({
			where: { category_id: id },
			limit: limit,
			offset: offset,
		});

		return res.status(200).send({ success: true, message: rows, total: count });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not found!" });
	}
};

// get song by artist
exports.getByArtist = async (req, res) => {
	try {
		const id = Number(req.params.id);
		const data = await songModel.tbl_song.findAll({
			where: { artist_id: id },
		});

		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not found!" });
	}
};
