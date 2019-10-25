export default (sequelize, DataTypes) => {
    const UsuarioRol = sequelize.define('UsuarioRol', {
        id_usuario: DataTypes.INTEGER,
        id_rol: DataTypes.INTEGER
    }, {
        tableName: "UsuarioRol"
    });
    UsuarioRol.associate = function(models) {
        // associations can be defined here
    };
    return UsuarioRol;
};