'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Rol', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nombre_rol: {
                type: Sequelize.STRING,
                allowNull: false
            },
            descripcion_rol: {
                type: Sequelize.STRING,
                allowNull: false
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
            comment: 'Tabla de usuarios de roles del sistema', // comment for table
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Rol');
    }
};