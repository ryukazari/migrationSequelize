import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import user from './usuario';
import { Connection } from '../../src/database/connection';
import { sequelize } from '../../src/database/connection';

let basename = path.basename(__filename);
let db = {};
/*let sequelize = new Sequelize('migrations', 'postgres', 'postgres', {
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
});*/

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;