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
        // A player belongs to a person
        Player.belongsTo(models.Person, { foreignKey: 'player_id' });
  
        // A player can have many contracts (many-to-many with teams)
        Player.belongsToMany(models.Team, { through: 'Contracts', foreignKey: 'player_id' });
  
        // A player can be involved in many transactions (trades)
        Player.hasMany(models.Transaction, { foreignKey: 'player_id' });
    };
  
    return Player;
  };
  