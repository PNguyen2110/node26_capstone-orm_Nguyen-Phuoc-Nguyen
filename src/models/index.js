const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("capstone", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
  port: 3310,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("success");
  } catch (err) {
    console.log(err);
  }
})();

const User = require("./User")(sequelize);
const Image = require("./Image")(sequelize);
const Comments = require("./Comments")(sequelize);
const SaveImage = require("./SaveImage")(sequelize);

// user 1  -  Image n
Image.belongsTo(User, { as: "user", foreignKey: "userId" });
User.hasMany(Image, { as: "image", foreignKey: "userId" });

// user 1 - n image
Image.belongsToMany(User, {
  as: "userSave",
  through: SaveImage,
  foreignKey: "imageId",
});
User.belongsToMany(Image, {
  as: "imageSave",
  through: SaveImage,
  foreignKey: "userId",
});

//
Image.belongsToMany(User, {
  as: "userComment",
  through: Comments,
  foreignKey: "imageId",
});
User.belongsToMany(Image, {
  as: "imageComment",
  through: Comments,
  foreignKey: "userId",
});

module.exports = {
  sequelize,
  User,
  Image,
  Comments,
  SaveImage,
};
