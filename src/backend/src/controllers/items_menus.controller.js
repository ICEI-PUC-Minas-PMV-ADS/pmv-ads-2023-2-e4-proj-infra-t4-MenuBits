import ItemsMenusService from "../services/items_menus.service.js";
import ItemsService from "../services/items.service.js";
import MenusService from "../services/menus.service.js";

class ItemsMenusController {
  async findItemByMenuId(request, response) {
    try {
      const item = await ItemsMenusService.findItem(
        Number(request.params.menuId),
        Number(request.params.itemId)
      );

      return response.status(200).json({
        status: 200,
        success: true,
        data: item,
      });
    } catch (error) {
      return response.status(500).json({
        message: `Não foi possível localizar os itens do cardápio`,
        error: error.message
      });
    }
  }

  async createRelationItemToMenu(request, response) {
    try {

      if(!request.body.itemId || !request.body.menuId) {
        return response.status(400).json({
          status: 400,
          message: "É necessário informar o 'itemId' e o 'menuId'"
        });
      }

      const relationItemMenu = await ItemsMenusService.findRelation(
        request.body.itemId, 
        request.body.menuId
      )

      if(relationItemMenu) {
        return response.status(400).json({
          status: 400,
          message: 'O item já está vinculado a este cardápio'
        });
      }

      const item = await ItemsService.findItemById(request.body.itemId)
      const menu = await MenusService.findMenuById(request.body.menuId)

      if(item.restaurantId !== menu.restaurantId) {
        return response.status(400).json({
          status: 400,
          message: 'Não é possível adicionar um item a um cardápio de restaurantes diferentes'
        });
      }

      const ItemsMenus = await ItemsMenusService.create(request.body);

      return response.status(201).json({
        status: 201,
        success: true,
        data: ItemsMenus,
      });

    } catch (error) {
      return response.status(500).json({ 
        status: 500,
        message: 'Não foi possível vincular os itens ao cardápio',
        error: error.message
    });
    }
  }

  async deleteRelationItemToMenu(request, response) {
    try {

      if(!request.params.itemId || !request.params.menuId) {
        return response.status(400).json({
          status: 400,
          message: "É necessário informar o 'itemId' e o 'menuId'"
        });
      }

      const relationItemMenu = await ItemsMenusService.findRelation(
        parseInt(request.params.itemId),
        parseInt(request.params.menuId)
      )

      if(!relationItemMenu) {
        return response.status(404).json({
          status: 404,
          message: 'Vínculo de menu e cardápio não encontrado'
        });
      }

      await ItemsMenusService.delete(
        relationItemMenu.id
      );

      return response.sendStatus(204);
    } catch (error) {
      return response.status(500).json({ 
        error: `Não foi possível excluir vínculo do item com o cardápio ${error.message}` 
    });
    }
  }
}

export default new ItemsMenusController();