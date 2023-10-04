import { prisma } from "../database/prisma.provider.js";

class ItemsService {
  async findItemById(id) {
    return await prisma.items.findUniqueOrThrow({
        where: { id },
    });
  }

  async create(payload) {
    return await prisma.items.create({
      data: payload,
    });
  }

  async update(id, payload) {
    return await prisma.items.update({
      where: { id },
      data: payload,
    });
  }

  async delete(id) {
    return await prisma.items.delete({
      where: { id },
    });
  }
}

export default new ItemsService();