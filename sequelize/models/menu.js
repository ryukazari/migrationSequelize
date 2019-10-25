export default (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
        id_menu_sup: DataTypes.INTEGER,
        orden_menu: DataTypes.INTEGER,
        nivel_menu: DataTypes.INTEGER,
        propiedades_menu: DataTypes.STRING,
        url_menu: DataTypes.STRING
    }, {
        tableName: `Menu`
    });
    Menu.associate = function(models) {
        // associations can be defined here
        models.Menu.belongsToMany(models.Rol, {
            through: 'MenuRol',
            as: 'rol',
            foreignKey: 'id_menu'
        });
    };
    return Menu;
};