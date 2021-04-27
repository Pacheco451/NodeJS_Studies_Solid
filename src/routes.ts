import { Router } from 'express'
import { createUserController } from './useCases/CreatUser'

const router = Router()

router.post('/user', (req, res) => {
    return createUserController.handle(res, req);
});

export { router }