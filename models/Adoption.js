const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Adoption extends Model {}

Adoption.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    adoption_date: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'adoption',
  }
);

module.exports = Adoption;