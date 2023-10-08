import { Router } from 'express';
import ItemsController from '../controllers/items.controller.js';
import ItemsMenusController from '../controllers/items_menus.controller.js';
import MenusController from '../controllers/menus.controller.js';
import RestaurantController from '../controllers/restaurante.controller.js';
import UserController from '../controllers/user.controller.js';
import UsersMenusController from '../controllers/users_menus.controller.js'
import GroupsController from '../controllers/groups.controller.js'
import AuthController from '../controllers/auth.controller.js';
import jwt from "jsonwebtoken";

const router = Router();

router.get('/', (req, res) => {
  res.send('API MenuBits WORKING!!!');
});

router.post('/api/auth', AuthController.authenticate);

router.get('/api/users', UserController.findAll);
router.get('/api/users/:id', UserController.findById);
router.post('/api/users', UserController.create);
router.put('/api/users/:id', UserController.update);
router.delete('/api/users/:id', UserController.delete);
router.get('/api/user-history/:id', UserController.getUserHistory);

//Items endpoint
router.get('/api/items/menus/:menuId', ItemsController.findAllItensByMenuId);
router.post('/api/items/', ItemsController.create);
router.put('/api/items/:id', ItemsController.update);
router.delete('/api/items/:id', ItemsController.delete);
router.get('/api/menus/:menuId/items/:itemId', ItemsMenusController.findItemByMenuId);
router.put('/api/items/itemofday/:id', ItemsController.setItemOfDay);

//Groups endpoints
router.get('/api/groups', GroupsController.findAll);
router.get('/api/groups/:id', GroupsController.findById);
router.post('/api/groups', GroupsController.create);
router.put('/api/groups/:id', GroupsController.update);
router.delete('/api/groups/:id', GroupsController.delete);

// Menu endpoint
router.get(
	'/api/menus/restaurant/:restaurantId',
	MenusController.getMenusByRestaurantId,
);
router.post('/api/menus', MenusController.create);
router.put('/api/menus/:menuId', MenusController.update);
router.delete('/api/menus/:menuId', MenusController.delete);

//Items_Menus endpoints
router.post('/api/menus/items', ItemsMenusController.createRelationItemToMenu);
router.delete('/api/menus/:menuId/items/:itemId', ItemsMenusController.deleteRelationItemToMenu);

//Users_Menus endpoints (favoritar cardápio)
router.post('/api/menus/users', UsersMenusController.createRelationUserToMenu);
router.delete('/api/menus/:menuId/user/:userId', UsersMenusController.deleteRelationUserToMenu);

//Restaurants endpoints
router.get('/api/restaurante', verifyJWT, RestaurantController.findAll);
router.get('/api/restaurante/:id', verifyJWT, RestaurantController.findById);
router.get('/api/restaurante/name/:name', verifyJWT, RestaurantController.findByName);
router.post('/api/restaurante', RestaurantController.create);
router.put('/api/restaurante/:id', RestaurantController.update);
router.delete('/api/restaurante/:id', RestaurantController.delete);

function verifyJWT(req, res, next) {
  const token = req.headers['x-api-key'];
  if (token) {
		jwt.verify(token, "secret", (err, decoded) => {
			if (err) return res.status(403).json({ auth: false, message: 'Token Inválido' });
			// se tudo estiver ok, salva no request para uso posterior
			req.user = {
				id: decoded.id,
				name: decoded.name,
			}
			next();
		});
	} else {
		next()
	}
}


export default router;