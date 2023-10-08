import ItemsService from "../services/items.service.js";
import ItemsMenusService from "../services/items_menus.service.js";
import { prisma } from "../database/prisma.provider.js";

class ItemsController {

    async findAllItensByMenuId(request, response) {
        try {

            const ItemsMenu = await ItemsMenusService.findItemsByMenuId(parseInt(request.params.menuId));
            const itemsIds = ItemsMenu.map(item => item.itemId);

            const items = await ItemsService.findItemById(itemsIds);
            
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


    async create(request, response) {
        try {
          const {
            name,
            price,
            description,
            groupId,
            restaurantId,
            imageUrl            
          } = request.body

          if (!name || !price || !groupId || !restaurantId) {
            return response.status(400).json({
              status:400,
              message: "Estão faltando campos obrigatórios a serem informados."
            })
          } 

          const Item = await prisma.Items.create({
            data: {
              name,
              price,
              description,
              groupId,
              restaurantId,
              imageUrl
            }
          })
          return response.status(201).json({
            Item
          });
        } catch (error) {
          return response.status(500).json({ error: error.message });
        }
      }
    
      async update(request, response) {
        const { id } = request.params;
        const data = request.body;
    
        try {
          const Item = await ItemsService.update(parseInt(id), data);
          return response.status(200).json({
            data: Item,
          });
        } catch (error) {
          return response.status(500).json({ error: error.message });
        }
      }
    
      async delete(request, response) {
        const { id } = request.params;
        try {
          await ItemsService.delete(parseInt(id));
    
          return response.status(204).json({
            message: "DELETADO COM SUCESSO",
          });
        } catch (error) {
          return response.status(500).json({ error: error.message });
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