module.exports = (sequelize, DataTypes) => {
    const Asset = sequelize.define('Asset', {
        round: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
  
    Asset.associate = (models) => {
        // An asset belongs to an original team
        Asset.belongsTo(models.Team, { foreignKey: 'original_team_id' });
  
        // An asset belongs to a current team
        Asset.belongsTo(models.Team, { foreignKey: 'current_team_id' });
    };
  
    return Asset;
  };
  