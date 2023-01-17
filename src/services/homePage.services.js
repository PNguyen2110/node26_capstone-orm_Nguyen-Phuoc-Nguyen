const { Image } = require("../models");

const getImage = async () => {
  try {
    const images = await Image.findAll();
    return images;
  } catch (err) {
    throw err;
  }
};

const getImageByName = async (imageName) => {
  try {
    const image = await Image.findAll({ where: { imageName } });
    if (!image) {
      throw new AppError(400, "Image not found");
    }
    return image;
  } catch (err) {
    throw err;
  }
};

module.exports = { getImage, getImageByName };
