module.exports = (sequelize, DataTypes) => {
    const Coach = sequelize.define('Coach', {
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
  
    Coach.associate = (models) => {
        Coach.belongsTo(models.Person, { foreignKey: 'coach_id' });
  
        Coach.belongsTo(models.Team, { foreignKey: 'team_id' });
    };
  
    return Coach;
  };
  