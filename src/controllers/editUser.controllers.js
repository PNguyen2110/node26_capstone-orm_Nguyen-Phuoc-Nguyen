const { response } = require("../helpers/response");
const editUserServices = require("../services/editUser.services");

const editUser = () => {
  return async (req, res, next) => {
    try {
      const { id } = res.locals.user;
      const data = req.body;
      const userUpdate = await editUserServices.editUser(data, id);
      res.status(200).json(response(userUpdate));
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { editUser };
