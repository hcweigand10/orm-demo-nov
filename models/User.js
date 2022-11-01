const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a new Sequelize model for books
class User extends Model {}

User.init(
  // TODO: set up User model
  // Username
  // Password
  // isAdmin true/false
  // email with validation + contraint
  {
    username: {
      type: DataTypes.STRING
    },
    password:{
      type: DataTypes.STRING
    },
    isAdmin:{
      type: DataTypes.BOOLEAN
    },
    email:{
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  },
  {
    // Link to database connection
    sequelize,
  }
);

module.exports = User;
