const { response } = require("../helpers/response");
const addImageServices = require("../services/addImage.services");

const addImage = () => {
  return async (req, res, next) => {
    try {
      const { id } = res.locals.user;
      const data = req.body;
      data.userId = id;
      await addImageServices.addImage(data);
      res.status(200).json(response("success"));
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { addImage };
