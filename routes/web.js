const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const songController = require("../controllers/song.controller");
const albumController = require("../controllers/album.controller");
const categoryController = require("../controllers/category.controller");
// Multer upload images
const uploadSong = require("../configs/multer/multerUploadSong");

// multer
const fs = require("fs");

/********************* user API: ***************************/
const uploadUser = require("../configs/multer/multerUploadUser");
router.post("/user/addnew", userController.addNew);
router.put("/user/edit", uploadUser, userController.edit);
router.get("/user/login/:username/:password", userController.login);
router.get("/user/getone/:id", userController.getOne);
router.get("/user/search/:keywords", userController.search);
/********************* songs API: ***************************/
router.post("/song/addnew", uploadSong, songController.addNew);
router.get("/song/getnew", songController.getNew);
router.get("/song/gettop100", songController.getTop);
router.put("/song/updatelistened", songController.updateListened);
router.get("/song/getchart/:category_name", songController.getChart);
router.get("/song/search/:keywords", songController.search);
/********************* Album API: ***************************/
const uploadAlbum = require("../configs/multer/multerUploadAlbum");
router.post("/album/addnew", uploadAlbum, albumController.addNew);
router.get("/album/getall/:id", albumController.getAll);
router.post("/album/addsongtoalbum", albumController.addSongToAlbum);
router.get("/album/getalbumdetail/:album_code", albumController.getDetails);
router.get("/album/getone/:album_code", albumController.getOne);
router.delete("/album/delete/:album_code", albumController.delete);
router.get("/album/search/:keywords", albumController.search);
/********************* Category API: ***************************/
const uploadCategory = require("../configs/multer/multerUploadCategory");
router.post("/category/addnew", uploadCategory, categoryController.addNew);
router.get("/category/getall/:limit", categoryController.getAll);
module.exports = router;
