const { response } = require("../helpers/response");
const photoManagementServices = require("../services/photoManagement.services");
const getUsers = () => {
  return async (req, res, next) => {
    try {
      const { user } = res.locals;
      console.log("user", user);
      res.status(200).json(response(user));
    } catch (err) {
      next(err);
    }
  };
};

const getListOfSavedPhotos = () => {
  return async (req, res, next) => {
    try {
      const { id } = res.locals.user;
      const user = await photoManagementServices.getListOfSavedPhotos(id);
      res.status(200).json(response(user));
    } catch (err) {
      next(err);
    }
  };
};

const getListOfCreatedImage = () => {
  return async (req, res, next) => {
    try {
      const { id } = res.locals.user;
      const image = await photoManagementServices.getListOfCreatedImage(id);
      res.status(200).json(response(image));
    } catch (error) {
      next(error);
    }
  };
};

const deleteImageByImageId = () => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log("id", id);
      const { user } = res.locals;
      await photoManagementServices.deleteImageByImageId(id, user);
      res.status(200).json(response("success"));
    } catch (err) {
      next(err);
    }
  };
};
module.exports = {
  getUsers,
  getListOfSavedPhotos,
  getListOfCreatedImage,
  deleteImageByImageId,
};
