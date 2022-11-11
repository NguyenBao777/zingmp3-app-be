// Multer upload images
// multer

const multer = require("multer");

const multerConfig = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "public/songs/");
	},
	filename: (req, file, callback) => {
		const ext = file.mimetype.split("/")[1];
		callback(null, `song_${file.originalname}_${Date.now()}.${ext}`);
	},
});
const accepts = (req, file, callback) => {
	if (file.mimetype.startsWith("image") || file.mimetype.startsWith("audio")) {
		callback(null, true);
	} else {
		callback(new Error("Only image/audio is allowed"));
	}
};

const upload = multer({
	storage: multerConfig,
	fileFilter: accepts,
});
const uploadSong = upload.array("song_files", 2);

module.exports = uploadSong;
