export default (sequelize, DataTypes) => {
    const MenuRol = sequelize.define('MenuRol', {
        id_menu: DataTypes.INTEGER,
        id_rol: DataTypes.INTEGER
    }, {
        tableName: `MenuRol`
    });
    MenuRol.associate = function(models) {
        // associations can be defined here
    };
    return MenuRol;
};