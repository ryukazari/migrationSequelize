'use strict';
export default (sequelize, DataTypes) => {
    const Sugerencia = sequelize.define('Sugerencia', {
        id_sugerencia: DataTypes.INTEGER,
        id_usuario: DataTypes.INTEGER,
        texto_sugerencia: DataTypes.STRING
    }, {
        tableName: "Sugerencia"
    });
    Sugerencia.associate = function(models) {
        // associations can be defined here
    };
    return Sugerencia;
};