import { prisma } from "../database/prisma.provider.js";

class MenusService {
	async createMenu(title, date) {
		return await prisma.menu.create({
		  data: {
			title,
			date,
		  },
		});
	  }
	
	  async updateMenu(menuId, title, date) {
		return await prisma.menu.update({
		  where: {
			id: menuId,
		  },
		  data: {
			title,
			date,
		  },
		});
	  }
	
	  async deleteMenu(menuId) {
		return await prisma.menu.delete({
		  where: {
			id: menuId,
		  },
		});
	  }
	  
	async findMenuById(id) {
		return await prisma.menus.findUniqueOrThrow({
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
