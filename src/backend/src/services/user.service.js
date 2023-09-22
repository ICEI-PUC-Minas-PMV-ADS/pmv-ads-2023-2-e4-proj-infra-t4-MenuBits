import { prisma } from "../database/prisma.provider.js";

class UserService {
  async findUsers() {
    return await prisma.user.findMany();
  }

  async findById(id) {
    return await prisma.user.findUniqueOrThrow({
      where: { id },
    });
  }

  async create(payload) {
    return await prisma.user.create({
      data: payload,
    });
  }

  async update(id, payload) {
    return await prisma.user.update({
      where: { id },
      data: payload,
    });
  }

  async delete(id) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}

export default new UserService();