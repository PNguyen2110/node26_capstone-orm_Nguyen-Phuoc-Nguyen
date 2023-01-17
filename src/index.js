const express = require("express");
const { sequelize } = require("./models");
const v1 = require("./routers/v1");
// const v1 = require("./src/routers/v1");
const app = express();
app.use(express.json());

sequelize.sync({ alter: true });

app.use("/api/v1", v1);

app.get("/error", (req, res, next) => {
  throw new AppError(500, "Internal Server");

  // or next(req, res, next)
});

app.listen(4004);
