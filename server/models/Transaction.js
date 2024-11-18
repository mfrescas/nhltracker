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
        // A transaction involves a player
        Transaction.belongsTo(models.Player, { foreignKey: 'player_id' });
  
        // A transaction involves an origin team
        Transaction.belongsTo(models.Team, { foreignKey: 'origin_team_id' });
  
        // A transaction involves a destination team
        Transaction.belongsTo(models.Team, { foreignKey: 'destination_team_id' });
    };
  
    return Transaction;
  };
  