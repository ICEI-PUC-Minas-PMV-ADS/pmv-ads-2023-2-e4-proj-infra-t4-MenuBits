import { prisma } from "../database/prisma.provider.js";

class ItemsToMenusService {
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