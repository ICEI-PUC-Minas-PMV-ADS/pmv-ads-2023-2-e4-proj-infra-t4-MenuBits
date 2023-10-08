import { prisma } from "../database/prisma.provider.js";

class UsersToMenusService {
  async findRelationsByUserId(userId) {
    return await prisma.users_Menus.findMany({
        where: { userId },
    });
  }

  async findRelation(userId, menuId) {
    return await prisma.users_Menus.findFirst({
      where: { userId, menuId }
    });
  }

  async create(payload) {
    return await prisma.users_Menus.create({
      data: {
        userId: payload.userId,
        menuId: payload.menuId
      }
    });
  }

  async delete(id) {
    return await prisma.users_Menus.delete({
      where: { id }
    });
  }
}

export default new UsersToMenusService();