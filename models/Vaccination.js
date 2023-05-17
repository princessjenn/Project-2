const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vaccination extends Model {}

Vaccination.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    vaccine_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vaccination',
  }
);

module.exports = Vaccination;