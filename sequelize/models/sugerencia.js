export default (sequelize, DataTypes) => {
    const Sugerencia = sequelize.define('Sugerencia', {
        id_usuario: DataTypes.INTEGER,
        texto_sugerencia: DataTypes.STRING
    }, {
        tableName: "Sugerencia"
    });
    Sugerencia.associate = function(models) {
        // associations can be defined here
        models.Usuario.hasMany(models.Sugerencia, { foreignKey: 'id_usuario' });
        models.Sugerencia.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });
    };
    return Sugerencia;
};