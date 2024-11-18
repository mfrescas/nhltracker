module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
  
    Player.associate = (models) => {
        Player.belongsTo(models.Person, { foreignKey: 'player_id' });

        Player.belongsToMany(models.Team, { through: 'Contracts', foreignKey: 'player_id' });

        Player.hasMany(models.Transaction, { foreignKey: 'player_id' });
    };
  
    return Player;
  };
  