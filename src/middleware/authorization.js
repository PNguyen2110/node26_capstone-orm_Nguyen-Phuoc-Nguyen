const jwt = require("jsonwebtoken");
const { AppError } = require("../helpers/error");
const { User } = require("../models");

const extractTokenFromHeader = (headers) => {
  const token = headers.authorization;
  const parts = token.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer" || !parts[1].trim()) {
    throw new AppError("401", "Invalid Token");
  }
  return parts[1];
};

const authorization = async (req, res, next) => {
  try {
    const token = extractTokenFromHeader(req.headers);
    const payload = jwt.verify(token, "capstone");
    const user = await User.findByPk(payload.id);
    if (!user) {
      throw new AppError(401, "User not found");
    }
    res.locals.user = user;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      next(new AppError(401, "token invalid"));
    }
    next(err);
  }
};

module.exports = authorization;
