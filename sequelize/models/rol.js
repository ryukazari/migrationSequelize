'use strict';
module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define('Rol', {
        nombre_rol: DataTypes.STRING,
        descripcion_rol: DataTypes.STRING
    }, {
        tableName: "Rol"
    });
    Rol.associate = function(models) {
        // associations can be defined here
        models.Rol.belongsToMany(models.Usuario, {
            through: 'UsuarioRol',
            as: 'usuarios',
            foreignKey: 'id_rol'
        });
    };
    return Rol;
};