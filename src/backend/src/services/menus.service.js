import { prisma } from "../database/prisma.provider.js";

class MenusService {
	async createMenu(title, restaurantId) {
		return await prisma.menus.create({
		  data: {
			title: title,
			restaurantId: restaurantId,
		  },
		});
	  }
	
	  async updateMenu(id, payload) {
		return await prisma.menus.update({
			where: { id },
			data: payload,
		});
	  }
	
	  async deleteMenu(id) {
		return await prisma.menus.delete({
		  where: {
			id: id,
		  },
		});
	  }
	  
	async findMenuById(id) {
		return await prisma.menus.findUnique({
			where: { id },
		});
	}

	async findMenuByRestaurantId(restaurantId) {
		return await prisma.menus.findMany({
			where: { restaurantId: parseInt(restaurantId) },
		});
	}
}

export default new MenusService();
