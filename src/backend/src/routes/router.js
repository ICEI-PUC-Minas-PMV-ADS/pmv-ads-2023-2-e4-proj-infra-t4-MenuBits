import { Router } from 'express';
import ItemsController from '../controllers/items.controller.js';
import ItemsMenusController from '../controllers/items_menus.controller.js';
import MenusController from '../controllers/menus.controller.js';
import RestaurantController from '../controllers/restaurante.controller.js';
import UserController from '../controllers/user.controller.js';
import UsersMenusController from '../controllers/users_menus.controller.js'
const router = Router();

router.get('/', (req, res) => {
  res.send('API MenuBits WORKING!!!');
});

router.get('/api/users', UserController.findAll);
router.get('/api/users/:id', UserController.findById);
router.post('/api/users', UserController.create);
router.put('/api/users/:id', UserController.update);
router.delete('/api/users/:id', UserController.delete);
router.get('/api/user-history/:id', UserController.getUserHistory);

//Items endpoints
router.get('/api/items/menus/:menuId', ItemsController.findAllItensByMenuId);
router.get('/api/menus/:menuId/items/:itemId', ItemsMenusController.findItemByMenuId);
router.put('/api/items/itemofday/:id', ItemsController.setItemOfDay);

// Menu endpoint
router.get(
	'/api/menus/restaurant/:restaurantId',
	MenusController.getItemsByRestaurantId,
);

//Items_Menus endpoints
router.post('/api/menus/items', ItemsMenusController.createRelationItemToMenu);
router.delete('/api/menus/:menuId/items/:itemId', ItemsMenusController.deleteRelationItemToMenu);

//Users_Menus endpoints (favoritar cardápio)
router.post('/api/menus/users', UsersMenusController.createRelationUserToMenu);
router.delete('/api/menus/:menuId/user/:userId', UsersMenusController.deleteRelationUserToMenu);

//Restaurants endpoints
router.get('/api/restaurante', RestaurantController.findAll);
router.get('/api/restaurante/:id', RestaurantController.findById);
router.get('/api/restaurante/name/:name', RestaurantController.findByName);
router.post('/api/restaurante', RestaurantController.create);
router.put('/api/restaurante/:id', RestaurantController.update);
router.delete('/api/restaurante/:id', RestaurantController.delete);

export default router;