import { prisma } from "../database/prisma.provider.js";
import mongoService from "./mongo.service.js";

class ItemsToMenusService {
  async findItem(menuId, itemId) {
    const itemMenu = await prisma.items_Menus.findFirstOrThrow({
      where: { menuId, itemId }
    });

    const item = await prisma.items.findFirstOrThrow({
      where: { id: itemMenu.itemId }
    });

    await mongoService.increaseItemAccess(item);

    const result = {
      ...item,
      statistics: await mongoService.getItemAccessCount(item.id)
    
    }
    
    return result;
  }

  async findItemsByMenuId(menuId) {
    return await prisma.items_Menus.findMany({
        where: { menuId },
    });
  }

  async findRelation(itemId, menuId) {
    return await prisma.items_Menus.findFirst({
      where: { itemId, menuId }
    });
  }

  async create(payload) {
    return await prisma.items_Menus.create({
      data: {
        itemId: payload.itemId,
        menuId: payload.menuId
      }
    });
  }

  async delete(id) {
    return await prisma.items_Menus.delete({
      where: { id }
    });
  }
}

export default new ItemsToMenusService();