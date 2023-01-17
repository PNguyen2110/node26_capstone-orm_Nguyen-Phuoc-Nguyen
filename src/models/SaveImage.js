const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "saveImage",
    {
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      imageId: {
        type: DataTypes.INTEGER,
        field: "image_id",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      saved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "save_image",
      timestamps: false,
    }
  );
};
