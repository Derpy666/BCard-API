const config = require("config");
const ENV = config.get("NODE_ENV");

const connectToDb = () => {
  if (ENV === "production") {
    require("./mongoDB/connectLocally");
  }
  if (ENV === "development") {
    require("./mongoDB/connectToAtlasDb");
  }
};

module.exports = connectToDb;
