const authServices = require("../services/auth.services");
const { response } = require("../helpers/response");
const register = () => {
  return async (req, res, next) => {
    try {
      const user = req.body;
      const createUser = await authServices.register(user);
      res.status(200).json(response(user));
    } catch (err) {
      next(err);
    }
  };
};

const login = () => {
  return async (req, res, next) => {
    try {
      const credentials = req.body;
      const user = await authServices.login(credentials);
      res.status(200).json(response(user));
    } catch (err) {
      next(err);
    }
  };
};

module.exports = {
  register,
  login,
};
