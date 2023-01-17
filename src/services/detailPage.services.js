const { Image } = require("../models");
const { Comments } = require("../models/");

const getInfoImage = async (imageId, userId) => {
  try {
    const image = await Image.findAll({
      where: { imageId },
      include: "user",
    });
    if (!image) {
      throw new AppError(400, "Image not found");
    }
    return image;
  } catch (err) {
    throw err;
  }
};

const getCommentsById = async (imageId) => {
  try {
    const comments = await Image.findAll({
      where: { imageId },
      include: {
        association: "userComment",
        through: [],
        // through: {
        //   attributes: ["content"],
        // },
      },
    });
    return comments;
  } catch (err) {
    throw err;
  }
};

const getSavedImages = async (imageId) => {
  try {
    const image = await Image.findOne({
      where: { imageId },
      include: {
        association: "userSave",
        through: {
          attributes: {
            exclude: ["userId", "imageId"],
          },
        },
      },
    });
    if (!image) throw new AppError(400, "Image not found");
    return image;
  } catch (err) {
    throw err;
  }
};

const postCommentByImageId = async (data) => {
  try {
    const commentByImageId = await Comments.create(data);
    return commentByImageId;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getInfoImage,
  getCommentsById,
  getSavedImages,
  postCommentByImageId,
};
