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
    dog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    vaccine_name: {
      type: DataTypes.STRING,
    },
    vaccine_date: {
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