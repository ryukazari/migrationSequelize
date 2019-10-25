'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('MenuRol', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_menu: {
                type: Sequelize.INTEGER,
                references: { model: 'Menu', key: 'id' },
                allowNull: false
            },
            id_rol: {
                type: Sequelize.INTEGER,
                references: { model: 'Rol', key: 'id' },
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
            comment: 'Tabla intermedia entre menu y rol', // comment for table
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('MenuRol');
    }
};