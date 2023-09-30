import { Router } from 'express';
import UserController from '../controllers/user.controller.js';
import restauranteController from '../controllers/restaurante.controller.js';
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/api/users', UserController.findAll);
router.get('/api/users/:id', UserController.findById);
router.post('/api/users', UserController.create);
router.put('/api/users/:id', UserController.update);
router.delete('/api/users/:id', UserController.delete);

router.get('/api/restaurante', restauranteController.findAll);
router.get('/api/restaurante/:id', restauranteController.findById);
router.post('/api/restaurante', restauranteController.create);
router.put('/api/restaurante/:id', restauranteController.update);
router.delete('/api/restaurante/:id', restauranteController.delete);

export default router;