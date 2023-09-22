import { Router } from 'express';
import UserController from '../controllers/user.controller.js';
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/api/users', UserController.findAll);
router.get('/api/users/:id', UserController.findById);
router.post('/api/users', UserController.create);
router.put('/api/users/:id', UserController.update);
router.delete('/api/users/:id', UserController.delete);


export default router;