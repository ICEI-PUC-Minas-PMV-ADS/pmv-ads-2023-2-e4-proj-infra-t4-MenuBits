import ItemsService from "../services/items.service.js";
import ItemsMenusService from "../services/items_menus.service.js";

class ItemsController {

    async findAllItensByMenuId(request, response) {
        try {

            const ItemsMenu = await ItemsMenusService.findItemsByMenuId(parseInt(request.params.menuId));
            const items = [];

            for (let i = 0; i < ItemsMenu.length; i++) {
                items.unshift(await ItemsService.findItemById(ItemsMenu[i].itemId))
            }
            
            return response.status(200).json({
                status: 200,
                success: true,
                data: items
            });

        } catch (error) {
            return response.status(500).json({
                error: `Não foi possível localizar os itens do cardápio ${error.message}`
            });
        }
    }
}

export default new ItemsController();