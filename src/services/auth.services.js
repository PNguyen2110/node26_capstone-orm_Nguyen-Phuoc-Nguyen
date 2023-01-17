const { AppError } = require("../helpers/error");
const generateToken = require("../helpers/jwt");
const { User } = require("../models");
const bcrypt = require("bcrypt");

const register = async (data) => {
  try {
    const isEmail = await User.findOne({ where: { email: data.email } });
    console.log("isEmail", isEmail);
    if (isEmail) {
      throw new AppError(400, "Email is exits");
    }
    const user = await User.create(data);
    return user;
  } catch (err) {
    throw err;
  }
};

const login = async (credential) => {
  try {
    const user = await User.findOne({
      where: {
        email: credential.email,
      },
      attributes: { include: ["password"] },
    });
    if (!user) {
      throw new AppError(400, "Email or Password invalid");
    }
    const isMatchedPassword = bcrypt.compareSync(
      credential.password,
      user.password
    );
    if (!isMatchedPassword) {
      throw new AppError(400, "Email or Password invalid");
    }
    delete user.dataValues.password;
    return generateToken(user);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  register,
  login,
};
