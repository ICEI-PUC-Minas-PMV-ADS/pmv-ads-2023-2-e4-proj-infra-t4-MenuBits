import { Router } from 'express';
import ItemsController from '../controllers/items.controller.js';
import ItemsMenusController from '../controllers/items_menus.controller.js';
import MenusController from '../controllers/menus.controller.js';
import RestaurantController from '../controllers/restaurante.controller.js';
import UserController from '../controllers/user.controller.js';
import UsersMenusController from '../controllers/users_menus.controller.js'
import GroupsController from '../controllers/groups.controller.js'
import AuthRestaurantController from "../controllers/auth.controller.js";
import AuthUserController from "../controllers/auth.user.controller.js";
import { AuthMiddlewares } from "../middlewares/auth.js";

const authUserController = new AuthUserController();
const authRestaurantController = new AuthRestaurantController();
const router = Router();

router.get("/", (req, res) => {
  res.send("API MenuBits WORKING!!!");
});

router.get("/api/users", AuthMiddlewares, UserController.findAll);
router.get("/api/users/:id", AuthMiddlewares ,UserController.findById);
router.post("/api/users", UserController.create);
router.put("/api/users/:id", AuthMiddlewares, UserController.update);
router.delete("/api/users/:id",AuthMiddlewares, UserController.delete);
router.get("/api/user-history/:id", UserController.getUserHistory);
router.post("/api/user/auth", authUserController.authenticate);


//Items endpoint
router.get('/api/items/menus/:menuId', ItemsController.findAllItensByMenuId);
router.post('/api/items/', AuthMiddlewares, ItemsController.create);
router.put('/api/items/:id', AuthMiddlewares, ItemsController.update);
router.delete('/api/items/:id', AuthMiddlewares, ItemsController.delete);
router.get('/api/menus/:menuId/items/:itemId', ItemsMenusController.findItemByMenuId);
router.put('/api/items/itemofday/:id', AuthMiddlewares, ItemsController.setItemOfDay);


//Groups endpoints
router.get('/api/groups', GroupsController.findAll);
router.get('/api/groups/:id', GroupsController.findById);
router.post('/api/groups', AuthMiddlewares, GroupsController.create);
router.put('/api/groups/:id', AuthMiddlewares, GroupsController.update);
router.delete('/api/groups/:id', AuthMiddlewares, GroupsController.delete);

// Menu endpoint
router.get(
	'/api/menus/restaurant/:restaurantId',
	MenusController.getMenusByRestaurantId,
);
router.post('/api/menus', AuthMiddlewares, MenusController.create);
router.put('/api/menus/:id', AuthMiddlewares, MenusController.update);
router.delete('/api/menus/:id', AuthMiddlewares, MenusController.delete);

//Items_Menus endpoints
router.post("/api/menus/items", AuthMiddlewares, ItemsMenusController.createRelationItemToMenu);
router.delete(
  "/api/menus/:menuId/items/:itemId",
  AuthMiddlewares,
  ItemsMenusController.deleteRelationItemToMenu
);

//Users_Menus endpoints (favoritar cardápio)
router.post("/api/menus/users", AuthMiddlewares, UsersMenusController.createRelationUserToMenu);
router.delete(
  "/api/menus/:menuId/user/:userId",
  AuthMiddlewares,
  UsersMenusController.deleteRelationUserToMenu
);

//Restaurants endpoints
router.get("/api/restaurante", AuthMiddlewares, RestaurantController.findAll);
router.get("/api/restaurante/:id", RestaurantController.findById);
router.get("/api/restaurante/name/:name", RestaurantController.findByName);
router.post("/api/restaurante", RestaurantController.create);
router.put("/api/restaurante/:id", AuthMiddlewares, RestaurantController.update);
router.delete("/api/restaurante/:id", AuthMiddlewares, RestaurantController.delete);

router.post("/api/restaurant/auth", authRestaurantController.authenticate);

export default router;
