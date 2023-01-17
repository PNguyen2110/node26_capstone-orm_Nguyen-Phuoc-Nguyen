const express = require("express");
const { register, login } = require("../../controllers/auth.controllers");
const {
  getInfoImage,
  getCommentsById,
  getSavedImages,
  postCommentByImageId,
} = require("../../controllers/detailPage.controllers");

const {
  getImage,
  getImageByName,
} = require("../../controllers/homepage.controllers");
const {
  getUsers,
  getListOfSavedPhotos,
  deleteImageByImageId,
  getListOfCreatedImage,
} = require("../../controllers/photoManagement.controllers");
const authorization = require("../../middleware/authorization");
const { editUser } = require("../../controllers/editUser.controllers");

const upload = require("../../middleware/uploadImage");
const { uploadImage } = require("../../controllers/upload.controllers");
const { addImage } = require("../../controllers/addImage.controllers");

const v1 = express.Router();

// auth
v1.post("/user", register());
v1.post("/login", login());
//homePage
v1.get("/images", getImage());
v1.get("/images/:name", getImageByName());
// detailPage
v1.get("/image/:id", getInfoImage());
v1.get("/comment/:id", getCommentsById());
v1.get("/savedImage/:id", getSavedImages());
v1.post("/postComment/:id", authorization, postCommentByImageId());
// photoManagement
v1.get("/profile", authorization, getUsers());
v1.get("/imageSaved", authorization, getListOfSavedPhotos());
v1.get("/imageCreated", authorization, getListOfCreatedImage());
v1.delete("/image/:id", authorization, deleteImageByImageId());
// addImage
v1.post("/addImage", authorization, addImage());
// editUser
v1.put("/updateUser", authorization, editUser());
v1.post("/uploadImage", upload.single("file"), uploadImage());
module.exports = v1;
