'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Menu', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_menu_sup: {
                type: Sequelize.INTEGER,
                references: { model: 'Menu', key: 'id' }
            },
            orden_menu: {
                type: Sequelize.INTEGER
            },
            nivel_menu: {
                type: Sequelize.INTEGER
            },
            propiedades_menu: {
                type: Sequelize.STRING
            },
            url_menu: {
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
            comment: 'Tabla de opciones del menú', // comment for table
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Menu');
    }
};