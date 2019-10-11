'use strict';
export default (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id_usuario: DataTypes.INTEGER,
        id_sede: DataTypes.INTEGER,
        nombre_usuario: DataTypes.STRING,
        bloqueado: DataTypes.INTEGER,
        intentos_fallidos_login: DataTypes.INTEGER,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
        nro_doc_person: DataTypes.STRING,
        ape_pat_per: DataTypes.STRING,
        ape_mat_per: DataTypes.STRING,
        nomb_per: DataTypes.STRING,
        fecha_nac_per: DataTypes.STRING,
        correo_per: DataTypes.STRING,
        nro_celular: DataTypes.STRING,
        nro_telefono: DataTypes.STRING,
        verificado: DataTypes.BOOLEAN,
        token_verificacion: DataTypes.STRING
    }, {
        tableName: "Usuario"
    });
    Usuario.associate = function(models) {
        // associations can be defined here
    };
    return Usuario;
};