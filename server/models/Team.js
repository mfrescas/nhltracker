module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
        team_name: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false
        },
        division: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        cap_space: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false
        },
        cap_hit: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false
        },
        roster_size: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
  
    Team.associate = (models) => {
        Team.belongsTo(models.Location, { foreignKey: 'location' });
  
        Team.hasMany(models.Coach, { foreignKey: 'team_id' });
  
        Team.belongsToMany(models.Player, { through: 'Contracts', foreignKey: 'team_id' });
  
        Team.hasMany(models.Asset, { foreignKey: 'original_team_id' });
        Team.hasMany(models.Asset, { foreignKey: 'current_team_id' });
  
        Team.hasMany(models.Transaction, { foreignKey: 'origin_team_id' });
        Team.hasMany(models.Transaction, { foreignKey: 'destination_team_id' });
    };
  
    return Team;
  };
  