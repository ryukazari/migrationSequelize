import models from '../../sequelize/models';
import Sugerencia from '../../sequelize/models/sugerencia';

export function listarUsuarios(req, res) {
    console.log("LISTAR USUARIOS");
    models.Usuario.findAll({
            attributes: {
                exclude: ['id']
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