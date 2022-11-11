const albumModel = require("../models/album.model");
const albumDetailModel = require("../models/albumDetail.model");
const fs = require("fs");
const Sequelize = require("sequelize");
const op = Sequelize.Op;
// add new album
exports.addNew = async (req, res) => {
	try {
		const albumCode = Math.floor(Math.random() * 100) + "AL-" + Date.now();
		const newAlbum = albumModel.tbl_album.build({
			user_id: req?.body?.user_id || 1,
			album_code: albumCode,
			album_name: req.body.album_name,
			album_desc: req.body.album_desc,
			album_cover: req.file.filename,
			album_status: req.body.album_status,
			created_at: new Date(),
			updated_at: new Date(),
		});
		const data = await newAlbum.save();

		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not saved!" });
	}
};

// get all
exports.getAll = async (req, res) => {
	try {
		const id = Number(req.params.id) || null;

		if (id) {
			const data = await albumModel.tbl_album.findAll({
				where: {
					user_id: id,
				},
			});

			return res.status(200).send({ success: true, message: data });
		} else {
			const data = await albumModel.tbl_album.findAll({
				where: {
					album_status: "public",
				},
			});

			return res.status(200).send({ success: true, message: data });
		}
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not found!" });
	}
};

// add song to album
exports.addSongToAlbum = async (req, res) => {
	try {
		const albumCode = req.body?.album_code;
		const arrSongs = await albumDetailModel.tbl_album_detail.findAll({
			where: {
				album_code: albumCode,
			},
		});
		const playlist = [];
		let i = 0;
		const maxLength = 10;
		while (i <= req.body.playlist.length - 1) {
			const arr = arrSongs.filter((song) => song.song_path === req.body.playlist[i].song_path);
			if (arr.length === 0 && playlist.length < maxLength - arrSongs.length) playlist.push(req.body.playlist[i]);
			i++;
		}

		if (playlist.length > 0 && arrSongs.length < maxLength) {
			const totalSave = playlist.map(async (song, i) => {
				const newAlbumDetail = albumDetailModel.tbl_album_detail.build({
					album_code: albumCode,
					song_id: song.id,
					song_name: song.song_name,
					song_cover: song.song_cover,
					song_path: song.song_path,
					song_lyric: song.song_lyric,
					song_duration: song.song_duration,
					author_name: song.author_name,
					artist_name: song.artist_name,
					author_id: song.author_id,
					artist_id: song.artist_id,
					category_id: song.category_id,
				});
				const data = await newAlbumDetail.save();
			});

			return res.status(200).send({
				success: true,
				message:
					totalSave.length > 1
						? "Data saved successfully!"
						: `Album tối đa chứa ${maxLength} bài hát đã lưu thêm ${totalSave.length} bài hát`,
			});
		} else {
			console.log("some thing wrong");
		}
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data do not save!" });
	}
};
// get one
exports.getOne = async (req, res) => {
	try {
		const data = await albumModel.tbl_album.findOne({
			where: { album_code: req.params.album_code },
		});
		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data do not found!" });
	}
};

// get details album
exports.getDetails = async (req, res) => {
	try {
		const data = await albumDetailModel.tbl_album_detail.findAll({
			where: { album_code: req.params.album_code },
			limit: 10,
		});
		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data do not found!" });
	}
};

// delete
exports.delete = async (req, res) => {
	console.log(req.params.album_code);
	try {
		const deleItem = await albumModel.tbl_album.findOne({
			where: { album_code: req.params.album_code },
		});
		if (deleItem) {
			const albumDetails = await albumDetailModel.tbl_album_detail.findAll({
				where: { album_code: req.params.album_code },
			});
			const data = await deleItem.destroy();
			albumDetails.forEach(async (albumItem) => {
				const albumItemDele = await albumItem.destroy();
			});

			fs.unlinkSync("./public/albums/" + deleItem?.album_cover);
		}

		return res.status(200).send({ success: true, message: "Delete successfully!" });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data do not found!" });
	}
};

// search
exports.search = async (req, res) => {
	const keywords = req.params.keywords;
	try {
		const data = await albumModel.tbl_album.findAll({
			where: {
				[op.or]: [
					{
						album_name: { [op.like]: `%${keywords}%` },
						album_status: "public",
					},
					{
						album_desc: { [op.like]: `%${keywords}%` },
						album_status: "public",
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
