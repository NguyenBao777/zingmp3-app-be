const categoryModel = require("../models/category.model");
// add new
exports.addNew = async (req, res) => {
	try {
		const newCategory = categoryModel.tbl_category.build({
			category_name: req.body.category_name,
			category_img: req.file.filename,
			category_desc: req.body.category_desc,
			category_status: req.body.category_status,
		});

		const data = await newCategory.save();

		return res.status(200).send({ success: true, message: data });
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Category do not save" });
	}
};
// get all
exports.getAll = async (req, res) => {
	const limit = Number(req.params.limit);

	try {
		if (limit > 0) {
			const data = await categoryModel.tbl_category.findAll({
				limit: limit,
			});
			if (data.length > 0) {
				return res.status(200).send({ success: true, message: data });
			}
			return res.status(200).send({ success: false, message: "Data not found!" });
		} else {
			const data = await categoryModel.tbl_category.findAll();
			if (data.length > 0) {
				return res.status(200).send({ success: true, message: data });
			}
			return res.status(200).send({ success: false, message: "Data not found!" });
		}
	} catch (err) {
		console.log(err);
		return res.status(200).send({ success: false, message: "Data not found!" });
	}
};
