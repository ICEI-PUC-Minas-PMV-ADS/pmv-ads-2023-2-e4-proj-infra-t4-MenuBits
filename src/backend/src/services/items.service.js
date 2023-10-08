import { prisma } from "../database/prisma.provider.js";
import mongoService from "./mongo.service.js";

class ItemsService {

	async findById(id) {
		return await prisma.items.findFirst({
			where: { id: id },
		});
	}

  async findItemById(_id) {
    let items = await prisma.items.findMany({
      where: { id: { in: _id } },
    });

    await mongoService.increaseManyItemsAccesses(items);

    items = await Promise.all(items.map(async item => {
      item.statistics = await mongoService.getItemAccessCount(item.id);
      return item;
    }));

    return items;
  }

  async findItemsByRestaurantId(restaurantId) {
    return await prisma.items.findMany({
        where: { restaurantId },
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