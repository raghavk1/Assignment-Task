'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Form extends Model { }

  Form.init({
    uniqueId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phonenumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    isGraduate: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Form',
  });

  return Form;
};
