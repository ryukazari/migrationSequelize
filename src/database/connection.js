import Sequelize from 'sequelize';
/*import Config from '../../sequelize/config.json';

export const Connection = new Sequelize(Config.development.username, Config.development.password, {
    host: Config.development.host,
    dialect: Config.development.dialect,
    pool: {
        max: 5,
        min: 0,
        require: 50000,
        idle: 60
    },
    logging: false
});*/

export const Connection = new Sequelize('migrations', 'postgres', 'postgres', {
    host: '172.16.179.31',
    dialect: 'postgres',
    schema: 'desarrollo',
    pool: {
        max: 5,
        min: 0,
        require: 50000,
        idle: 60
    },
    logging: false
});