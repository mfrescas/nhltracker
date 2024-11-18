const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('Location', {
        location_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        state: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        nation: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        }
    });

    Location.associate = (models) => {
        Location.hasMany(models.Team, { foreignKey: 'location' });
    };
    return Location;
  };
  