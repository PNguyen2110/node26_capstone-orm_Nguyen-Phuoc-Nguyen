const { response } = require("../helpers/response");
const homePageServices = require("../services/homePage.services");

const getImage = () => {
  return async (req, res, next) => {
    try {
      const images = await homePageServices.getImage();

      res.status(200).json(response(images));
    } catch (err) {
      next(err);
    }
  };
};

const getImageByName = () => {
  return async (req, res, next) => {
    try {
      const imageName = req.params;
      console.log("imageName", imageName.name);
      const image = await homePageServices.getImageByName(imageName.name);
      res.status(200).json(response(image));
    } catch (err) {
      next(err);
    }
  };
};

module.exports = {
  getImage,
  getImageByName,
};
