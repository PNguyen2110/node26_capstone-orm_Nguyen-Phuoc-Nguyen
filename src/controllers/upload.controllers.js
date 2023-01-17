const { AppError } = require("../helpers/error");
const { response } = require("../helpers/response");

const addImageServices = require("../services/addImage.services");

const uploadImage = () => {
  return async (req, res, next) => {
    const file = req.file;
    console.log(file);
    if (!file) {
      next(new AppError(400, "please upload a file"));
    }
    const url = `localhost:4000/${file.path.replace(/\\/g, "/")}`;

    res.status(200).json(response(url));
  };
};

module.exports = { uploadImage };
