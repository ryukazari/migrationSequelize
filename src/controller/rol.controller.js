import models from '../../sequelize/models';

export function crearRol(req, res) {
    const { nombre_rol, descripcion_rol } = req.body;
    models.Rol.create({
            nombre_rol,
            descripcion_rol
        })
        .then(rol => {
            return res.status(200).json({
                message: `Se creo el Rol ${rol.nombre_rol}.`,
                data: rol
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({
                message: `Error al crear Rol.`,
                data: {}
            })
        })
}