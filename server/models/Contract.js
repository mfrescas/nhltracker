module.exports = (sequelize, DataTypes) => {
    const Contract = sequelize.define('Contract', {
        cap_hit: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false
        }
    });
  
    Contract.associate = (models) => {
        Contract.belongsTo(models.Player, { foreignKey: 'player_id' });
  
        Contract.belongsTo(models.Team, { foreignKey: 'team_id' });
    };
  
    return Contract;
  };
  