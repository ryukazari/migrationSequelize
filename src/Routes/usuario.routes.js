import { Router } from 'express';

import { listarUsuarios, agregarUsuario, asignarRol } from '../controller/usuario.controller';

const router = Router();

router.get('/', listarUsuarios);
router.post('/', agregarUsuario);
router.post('/asignar-rol', asignarRol);

export default router;