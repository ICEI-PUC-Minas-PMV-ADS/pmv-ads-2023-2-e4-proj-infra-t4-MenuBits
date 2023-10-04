import { Router } from 'express';
import UserController from '../controllers/user.controller.js';
import ItemsMenusController from '../controllers/items_menus.controller.js';
import itemsController from '../controllers/items.controller.js';
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


//Items_Menus endpoints
router.post('/api/menus/items', ItemsMenusController.createRelationItemToMenu);
router.delete('/api/menus/:menuId/items/:itemId', ItemsMenusController.deleteRelationItemToMenu);

export default router;