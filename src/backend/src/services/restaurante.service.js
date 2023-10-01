import { prisma } from "../database/prisma.provider.js";

class RestauranteService {
  async findUsers() {
    return await prisma.restaurants.findMany();
  }

  async findById(id) {
    const restaurant = await prisma.restaurants.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (restaurant === null) {
      return restaurant
    } else {
      return restaurant;
    }
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
