const { AppError } = require("../helpers/error");
const { User, Image } = require("../models");

const getListOfSavedPhotos = async (id) => {
  try {
    const user = await User.findAll({
      where: { id },
      include: {
        association: "imageSave",
        through: [],
      },
    });
    return user;
  } catch (err) {
    throw err;
  }
};

const getListOfCreatedImage = async (userId) => {
  try {
    const image = await Image.findAll({
      where: { userId },
    });
    return image;
  } catch (error) {
    throw error;
  }
};

const deleteImageByImageId = async (imageId, user) => {
  try {
    const image = await Image.findByPk(imageId);
    if (!image) {
      throw new AppError(400, "image not found");
    }
    console.log("userId", user.id);
    if (image.userId !== user.id) {
      throw new AppError(403, "no have permissions");
    }
    const deleteImage = await Image.destroy({ where: { imageId } });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getListOfSavedPhotos,
  getListOfCreatedImage,
  deleteImageByImageId,
};
