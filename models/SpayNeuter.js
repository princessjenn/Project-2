const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SpayNeuter extends Model {}

SpayNeuter.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    spay_neuter_status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'spayNeuter',
  }
);

module.exports = SpayNeuter;