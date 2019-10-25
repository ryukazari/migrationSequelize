export default (sequelize, DataTypes) => {
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
        models.Rol.belongsToMany(models.Menu, {
            through: 'MenuRol',
            as: 'menu',
            foreignKey: 'id_rol'
        });
    };
    return Rol;
};