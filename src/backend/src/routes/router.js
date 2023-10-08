import { Router } from 'express';
import itemsController from '../controllers/items.controller.js';
import ItemsMenusController from '../controllers/items_menus.controller.js';
import menusController from '../controllers/menus.controller.js';
import restauranteController from '../controllers/restaurante.controller.js';
import UserController from '../controllers/user.controller.js';
const router = Router();

router.get('/', (req, res) => {
  res.send('API MenuBits WORKING!!!');
});

router.get('/api/users', UserController.findAll);
router.get('/api/users/:id', UserController.findById);
router.post('/api/users', UserController.create);
router.put('/api/users/:id', UserController.update);
router.delete('/api/users/:id', UserController.delete);

//Items endpoint
router.get('/api/items/menus/:menuId', itemsController.findAllItensByMenuId)
router.post('/api/items/', itemsController.create);
router.put('/api/items/:id', itemsController.update);
router.delete('/api/items/:id', itemsController.delete);

//Menu endpoint
router.get(
	'/api/menus/restaurant/:restaurantId',
	menusController.getItemsByRestaurantId,
);

//Items_Menus endpoints
router.post('/api/menus/items', ItemsMenusController.createRelationItemToMenu);
router.delete('/api/menus/:menuId/items/:itemId', ItemsMenusController.deleteRelationItemToMenu);

//Restaurants endpoints
router.get('/api/restaurante', restauranteController.findAll);
router.get('/api/restaurante/:id', restauranteController.findById);
router.get('/api/restaurante/name/:name', restauranteController.findByName);
router.post('/api/restaurante', restauranteController.create);
router.put('/api/restaurante/:id', restauranteController.update);
router.delete('/api/restaurante/:id', restauranteController.delete);

export default router;