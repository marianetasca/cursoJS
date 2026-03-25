import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, fotoController.store); // foto esta sendo puxada do insomnia multpart

export default router;
