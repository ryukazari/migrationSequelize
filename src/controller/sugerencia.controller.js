import models from '../../sequelize/models';

export function crearSugerencia(req, res) {
    const { id_usuario, texto_sugerencia } = req.body;
    console.log("AGREGAR SUGERENCIA");
    models.Sugerencia.create({
            id_usuario,
            texto_sugerencia
        })
        .then(sugerencia => {
            return res.status(200).json({
                message: `Sugerencia del usuario con id ${sugerencia.id_usuario} creada satisfactoriamente...`,
                data: sugerencia
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({
                message: "Error al crear la sugerencia",
                data: {}
            });
        })

}