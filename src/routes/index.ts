import { Router } from 'express';
import auth from './auth';
import dashboard from './dashboard';

const router = Router();

router.use('/auth', auth);
router.use('/dash', dashboard);

export default router;
