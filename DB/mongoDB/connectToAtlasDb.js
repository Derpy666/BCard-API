const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");

const userName = config.get("DB_NAME");
const password = process.env.DB_PASSWORD

mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@cluster0.ke8szkn.mongodb.net/noam`
  )
  .then(() => console.log(chalk.magentaBright("Connect To Atlas MongoDB!")))
  .catch((error) => {
    console.log(chalk.redBright(error));
  });
