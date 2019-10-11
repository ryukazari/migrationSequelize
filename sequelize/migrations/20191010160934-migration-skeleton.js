'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Person', {
            name: Sequelize.STRING,
            isBetaMember: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Users',
                        schema: 'public'
                    },
                    key: 'id'
                },
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Person')
    }
};