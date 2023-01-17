const { Image } = require("../models");

const addImage = async (data) => {
  try {
    await Image.create(data);
  } catch (error) {
    throw error;
  }
};
module.exports = { addImage };
