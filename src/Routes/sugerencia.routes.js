import { Router } from 'express';

import { crearSugerencia } from '../controller/sugerencia.controller';

const router = Router();

router.post('/', crearSugerencia);

export default router;