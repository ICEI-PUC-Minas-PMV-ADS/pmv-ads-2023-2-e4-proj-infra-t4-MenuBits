import { prisma } from "../database/prisma.provider.js";
import mongoService from "./mongo.service.js";

class RestauranteService {
  async findUsers(requestUserData) {
    const restaurants = await prisma.restaurants.findMany();

    await mongoService.storeManyCustomerHistory(restaurants, requestUserData);

    return restaurants;
  }

  async findById(id, requestUserData) {
    const restaurant = await prisma.restaurants.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (restaurant === null) {
      return restaurant
    } else {
      await mongoService.storeCustomerHistory(restaurant, requestUserData);
      return restaurant;
    }
  }

  async findByName(name, requestUserData) {
    const restaurant = await prisma.restaurants.findMany({
      where: {
        name: name,
      },
    });
    if (restaurant === null) {
      return restaurant
    } else {
      await mongoService.storeCustomerHistory(restaurant, requestUserData);
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
