import Sequelize from 'sequelize';
import Config from '../../sequelize/config/Config.json';

export const sequelize = new Sequelize(Config.development.database, Config.development.username, Config.development.username, {
    host: Config.development.host,
    dialect: Config.development.dialect,
    schema: Config.development.schema,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
});