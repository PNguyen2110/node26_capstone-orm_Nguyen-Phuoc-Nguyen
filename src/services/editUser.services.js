const { User } = require("../models");

const editUser = async (data, id) => {
  try {
    await User.update(data, { where: { id } });
    const user = await User.findOne({ where: { id } });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { editUser };
