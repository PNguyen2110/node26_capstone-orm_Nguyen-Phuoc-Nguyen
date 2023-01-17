const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "comments",
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
      content: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "comments",
      timestamps: false,
    }
  );
};
