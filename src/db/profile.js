const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/sequelize');

class Profile extends Model {}

// Model attributes
Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'profile',
  }
);

// Model associations
Profile.associate = models => {
  Profile.hasMany(models.User, {
    as: 'users',
    foreignKey: 'profileId',
  });
};

module.exports = Profile;
