// Multer upload images
// multer

const multer = require("multer");

const multerConfig = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "public/categories/");
	},
	filename: (req, file, callback) => {
		const ext = file.mimetype.split("/")[1];
		callback(null, `category_${file.originalname}_${Date.now()}.${ext}`);
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
const uploadImage = upload.single("category_img");

module.exports = uploadImage;
