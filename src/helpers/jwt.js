const jwt = require("jsonwebtoken");
const EXPIRES_IN = 60 * 60 * 24;

const generateToken = (payload) => {
  const token = jwt.sign(
    {
      id: payload.id,
      email: payload.email,
    },
    "capstone",
    {
      expiresIn: EXPIRES_IN,
    }
  );
  return {
    token,
    expiresIn: EXPIRES_IN,
  };
};

module.exports = generateToken;
