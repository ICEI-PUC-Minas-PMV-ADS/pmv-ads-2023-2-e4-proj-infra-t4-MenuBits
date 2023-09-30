import { prisma } from "../database/prisma.provider.js";

class RestauranteService {
  async findUsers() {
    return await prisma.restaurants.findMany();
  }

  async findById(id) {
    return await prisma.restaurants.findUniqueOrThrow({
      where: { id },
    });
  }

  async create(payload) {
    return await prisma.restaurants.create({
      data: payload,
    });
  }

  async update(id, payload) {
    return await prisma.restaurants.update({
      where: { id },
      data: payload,
    });
  }

  async delete(id) {
    return await prisma.restaurants.delete({
      where: { id },
    });
  }
}

export default new RestauranteService();