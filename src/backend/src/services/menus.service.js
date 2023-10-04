import { prisma } from "../database/prisma.provider.js";

class MenusService {
  async findMenuById(id) {
    return await prisma.menus.findUniqueOrThrow({
      where: { id },
    });
  }
}

export default new MenusService();