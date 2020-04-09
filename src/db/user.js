const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/sequelize');

class User extends Model {}

// Model attributes
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

//add function de verif  par exemple verif password pour faire les test de modele apres

// Model associations
User.associate = models => {
  User.belongsTo(models.Profile, {
    as: 'profile',
    foreignKey: 'profileId',
  });
};

module.exports = User;
