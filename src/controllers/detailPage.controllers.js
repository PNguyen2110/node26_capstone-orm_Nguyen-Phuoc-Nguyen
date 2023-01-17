const { response } = require("../helpers/response");
const detailPageServices = require("../services/detailPage.services");

const getInfoImage = () => {
  return async (req, res, next) => {
    try {
      const imageId = req.params;

      const user = req.body;
      const image = await detailPageServices.getInfoImage(imageId.id);
      res.status(200).json(response(image));
    } catch (err) {
      next(err);
    }
  };
};

const getCommentsById = () => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log("id", id);
      const comment = await detailPageServices.getCommentsById(id);
      res.status(200).json(response(comment));
    } catch (err) {
      next(err);
    }
  };
};

const getSavedImages = () => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const image = await detailPageServices.getSavedImages(id);
      res.status(200).json(response(image));
    } catch (err) {
      next(err);
    }
  };
};

const postCommentByImageId = () => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const { user } = res.locals;
      const data = req.body;
      data.imageId = id;
      data.userId = user.id;
      const postComment = await detailPageServices.postCommentByImageId(data);
      res.status(200).json(response(postComment));
    } catch (err) {
      next(err);
    }
  };
};

module.exports = {
  getInfoImage,
  getCommentsById,
  getSavedImages,
  postCommentByImageId,
};
