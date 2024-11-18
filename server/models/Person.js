module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define("Person", {
        person_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    });
    
    return Person;
}