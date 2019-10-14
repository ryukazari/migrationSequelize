import models from '../../sequelize/models';

export function listarUsuarios(req, res) {
    console.log("LISTAR USUARIOS");
    models.Usuario.findAll({
            // se puede utilizar el attributes sin el 'exclude' para que solo se muestren esos campos xd
            attributes: { exclude: ['bloqueado', 'intentos_fallidos_login', 'password', 'image', 'nro_celular', 'nro_telefono', 'verificado', 'token_verificacion'] },
            /*include: [{ // Notice `include` takes an ARRAY
                model: models.Sugerencia
            }],*/
            where: {
                //verificado: true
            }
        })
        .then(usuarios => {
            res.status(200).json({
                data: usuarios
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error al obtener los registros de la tabla usuario",
                data: {}
            });
        })
}

export function agregarUsuario(req, res) {
    const { id_sede, nombre_usuario, password, nro_doc_person, ape_pat_per, ape_mat_per, nomb_per, correo_per, nro_celular, nro_telefono } = req.body;
    console.log("AGREGAR USUARIOS");
    models.Usuario.create({
            id_sede,
            nombre_usuario,
            password,
            nro_doc_person,
            ape_pat_per,
            ape_mat_per,
            nomb_per,
            correo_per,
            nro_celular,
            nro_telefono
        })
        .then(user => {
            return res.status(200).json({
                message: "Usuario creado satisfactoriamente...",
                data: user
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({
                message: "Error al crear el usuario",
                data: {}
            });
        })
}

export function asignarRol(req, res) {
    const { id_usuario, id_rol } = req.body;
    console.log("ASIGNAR USUARIOS");
    models.UsuarioRol.create({
            id_usuario,
            id_rol
        })
        .then(usuariorol => {

            res.status(200).json({
                message: `Se asignó el rol con id ${usuariorol.id_rol} al usuario con id ${usuariorol.id_usuario}.`,
                data: usuariorol
            })
        })
        .catch(error => {
            res.status(500).json({
                message: `Error al asignar Rol`,
                data: {}
            })
        })

}