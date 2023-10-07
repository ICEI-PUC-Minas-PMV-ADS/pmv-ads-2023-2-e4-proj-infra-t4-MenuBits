import { prisma } from "../database/prisma.provider.js";
import mongoService from "./mongo.service.js";

class RestauranteService {
  async findUsers() {
    const restaurants = await prisma.restaurants.findMany();

    await mongoService.storeManyCustomerHistory(restaurants, { id: 1, name: 'teste' });

    return restaurants;
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
      await mongoService.storeCustomerHistory(restaurant, { id: 1, name: 'teste' });
      return restaurant;
    }
  }

  async findByName(name) {
    const restaurant = await prisma.restaurants.findMany({
      where: {
        name: name,
      },
    });
    if (restaurant === null) {
      return restaurant
    } else {
      await mongoService.storeCustomerHistory(restaurant, { id: 1, name: 'teste' });
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
