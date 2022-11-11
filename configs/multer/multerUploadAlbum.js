// Multer upload images
// multer

const multer = require("multer");

const multerConfig = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "public/albums/");
	},
	filename: (req, file, callback) => {
		const ext = file.mimetype.split("/")[1];
		callback(null, `album_${file.originalname}_${Date.now()}.${ext}`);
	},
});
const accepts = (req, file, callback) => {
	if (file.mimetype.startsWith("image")) {
		callback(null, true);
	} else {
		callback(new Error("Only image is allowed"));
	}
};

const upload = multer({
	storage: multerConfig,
	fileFilter: accepts,
});
const uploadImage = upload.single("album_files");

module.exports = uploadImage;
