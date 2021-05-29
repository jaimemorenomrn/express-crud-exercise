const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Post = dbConnection.define("Post", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    default: DataTypes.UUIDV4,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Post;
