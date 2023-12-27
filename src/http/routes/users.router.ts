import { Router } from 'express';

const router = Router();

router.get(
    '/check',
    () => {
        return 'ok';
    }
)

export default router;