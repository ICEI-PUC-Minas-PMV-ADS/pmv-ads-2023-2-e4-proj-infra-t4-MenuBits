import { prisma } from "../database/prisma.provider.js";

class MenusService {
	async findMenuById(id) {
		return await prisma.menus.findUniqueOrThrow({
			where: { id },
		});
	}

	async findMenuByRestaurantId(restaurantId) {
		console.log(restaurantId);
		return await prisma.menus.findMany({
			where: { restaurantId: parseInt(restaurantId) },
		});
	}
}

export default new MenusService();
