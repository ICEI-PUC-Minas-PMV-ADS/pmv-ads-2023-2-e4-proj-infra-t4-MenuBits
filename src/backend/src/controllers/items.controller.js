import ItemsService from "../services/items.service.js";
import ItemsMenusService from "../services/items_menus.service.js";

class ItemsController {

    async findAllItensByMenuId(request, response) {
        try {

            const itemsMenu = await ItemsMenusService.findItemsByMenuId(parseInt(request.params.menuId));
            const items = [];

            for (let i = 0; i < itemsMenu.length; i++) {
                items.unshift(await ItemsService.findItemById(itemsMenu[i].itemId))
            }
            
            return response.status(200).json({
                status: 200,
                success: true,
                data: items
            });

        } catch (error) {
            return response.status(500).json({
                message: `Não foi possível localizar os itens do cardápio`,
                error: error.message
            });
        }
    }

    async setItemOfDay(request, response) {
        try {
            const item = await ItemsService.findItemById(parseInt(request.params.id))

            const otherItems = await ItemsService.findItemsByRestaurantId(item.restaurantId)

            for (let i = 0; i < otherItems.length; i++) {
                await ItemsService.update(otherItems[i].id, {isItemOfDay: false})
            }

            await ItemsService.update(item.id, {isItemOfDay: true})
            
            return response.status(200).json({
                status: 200,
                success: true,
                data: item
            });

        } catch (error) {
            return response.status(500).json({
                message: `Não foi possível definir o item do dia`,
                error: error.message
            });
        }
    }
}

export default new ItemsController();