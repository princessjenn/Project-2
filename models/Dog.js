const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    sex: {
      type: DataTypes.STRING,
    },
    vaccination: {
      type: DataTypes.STRING,
    },
    date_arrived: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spay_neuter_status: {
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagePath: { //new column for image URL
    type: DataTypes.STRING,
    allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dog',
  }
);

module.exports = Dog;
