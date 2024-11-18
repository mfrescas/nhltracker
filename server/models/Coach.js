module.exports = (sequelize, DataTypes) => {
    const Coach = sequelize.define('Coach', {
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
  
    Coach.associate = (models) => {
        // A coach belongs to a person
        Coach.belongsTo(models.Person, { foreignKey: 'coach_id' });
  
        // A coach belongs to a team
        Coach.belongsTo(models.Team, { foreignKey: 'team_id' });
    };
  
    return Coach;
  };
  