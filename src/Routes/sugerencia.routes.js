import { Router } from 'express';

import { crearSugerencia, editarSugerencia, listarSugerencias } from '../controller/sugerencia.controller';

const router = Router();

router.get('/', listarSugerencias)
router.post('/', crearSugerencia);
router.put('/:id', editarSugerencia);

export default router;