'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Sugerencia', {
            id_sugerencia: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_usuario: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Usuario', key: 'id_usuario' }
            },
            texto_sugerencia: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }, {
            schema: 'desarrollo', // default: public, PostgreSQL only.
            comment: 'Sugerencia para el sistema por parte del usuario', // comment for table
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Sugerencia');
    }
};