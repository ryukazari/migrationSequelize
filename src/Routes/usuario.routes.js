import { Router } from 'express';

import { listarUsuarios, agregarUsuario } from '../controller/usuario.controller';

const router = Router();

router.get('/', listarUsuarios);
router.post('/', agregarUsuario);

export default router;