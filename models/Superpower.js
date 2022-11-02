const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Superpower extends Model {}

Superpower.init(
    {
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        downside: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
    }
);

module.exports=Superpower