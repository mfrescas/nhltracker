module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        transaction_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        transaction_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
  
    Transaction.associate = (models) => {
        Transaction.belongsTo(models.Player, { foreignKey: 'player_id' });
  
        Transaction.belongsTo(models.Team, { foreignKey: 'origin_team_id' });
  
        Transaction.belongsTo(models.Team, { foreignKey: 'destination_team_id' });
    };
  
    return Transaction;
  };
  