'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Usuario', {
            id_usuario: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_sede: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            nombre_usuario: {
                type: Sequelize.STRING,
                allowNull: false
            },
            bloqueado: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            intentos_fallidos_login: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            image: {
                type: Sequelize.STRING
            },
            nro_doc_person: {
                type: Sequelize.STRING,
                allowNull: false
            },
            ape_pat_per: {
                type: Sequelize.STRING,
                allowNull: false
            },
            ape_mat_per: {
                type: Sequelize.STRING
            },
            nomb_per: {
                type: Sequelize.STRING,
                allowNull: false
            },
            fecha_nac_per: {
                type: Sequelize.STRING
            },
            correo_per: {
                type: Sequelize.STRING
            },
            nro_celular: {
                type: Sequelize.STRING
            },
            nro_telefono: {
                type: Sequelize.STRING
            },
            verificado: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            token_verificacion: {
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
            comment: 'Tabla de usuarios del sistema', // comment for table
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Usuario');
    }
};