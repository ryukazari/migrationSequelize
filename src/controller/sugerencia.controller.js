import models from '../../sequelize/models';


export function listarSugerencias(req, res) {
    models.Sugerencia.findAll({
            include: [{ // Notice `include` takes an ARRAY
                model: models.Usuario,
                attributes: ['nombre_usuario', 'nro_doc_person']
            }]
        })
        .then(sugerencias => {
            return res.status(200).json({
                message: `Lista de Sugerencias`,
                data: sugerencias
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({
                message: `Error al listar sugerencias`,
                data: {}
            })
        })
}

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

export function editarSugerencia(req, res) {
    const { id } = req.params;
    const { id_usuario, texto_sugerencia } = req.body;
    console.log("EDITAR SUGERENCIA");
    models.Sugerencia.update({
            id_usuario,
            texto_sugerencia
        }, {
            returning: true,
            where: { id }
        })
        .then(([rowsUpdate, [sugerenciaUpdate]]) => {
            return res.status(200).json({
                message: `La sugerencia fue editada.`,
                data: sugerenciaUpdate
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({
                message: "Error al crear o modificar la sugerencia",
                data: {}
            });
        })

}