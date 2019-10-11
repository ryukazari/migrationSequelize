'use strict';
export default (sequelize, DataTypes) => {
    const Person = sequelize.define('Person', {
        name: DataTypes.STRING,
        isBetaMember: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            /*references: {
                model: {
                    tableName: 'Users',
                    schema: 'public'
                },
                key: 'id'
            },*/
            allowNull: false
        }
    }, {});
    Person.associate = function(models) {
        /*Person.hasOne(models.user, {
            foreignKey: 'userId',
            as: 'userDetails'
        });*/
    };
    return Person;
};