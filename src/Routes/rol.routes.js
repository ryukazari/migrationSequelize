import { Router } from 'express';

import { crearRol } from '../controller/rol.controller';

const router = Router();

//router.get('/', );
router.post('/', crearRol);

export default router;