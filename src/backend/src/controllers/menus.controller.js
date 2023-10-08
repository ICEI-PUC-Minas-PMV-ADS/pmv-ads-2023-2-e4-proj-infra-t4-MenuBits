import MenusService from "../services/menus.service.js";

class MenusController {

	async create(request, response) {
		try {
			const { title, date } = request.body;
			const menu = await MenusService.createMenu(title, date);
			response.json(menu);
		} catch (error) {
			console.error("Erro ao criar o cardápio:", error);
			response.status(500).json({ error: "Erro interno do servidor." });
		}
	}

	async update(request, response) {
		try {
			const { menuId } = request.params;
			const { title, date } = request.body;
			const updatedMenu = await MenusService.updateMenu(menuId, title, date);
			response.json(updatedMenu);
		} catch (error) {
			console.error("Erro ao atualizar o cardápio:", error);
			response.status(500).json({ error: "Erro interno do servidor." });
		}
	}

	async delete(request, response) {
		try {
			const { menuId } = request.params;
			await MenusService.deleteMenu(menuId);
			response.json({ message: "Cardápio excluído com sucesso." });
		} catch (error) {
			console.error("Erro ao excluir o cardápio:", error);
			response.status(500).json({ error: "Erro interno do servidor." });
		}
	}

	async getMenusByRestaurantId(request, response) {
		const { restaurantId } = request.params;
		try {
			const menu = await MenusService.findMenuByRestaurantId(
				restaurantId,
			);

			if (menu.length === 0) {
				return response.status(404).json({
					status: "Not Found",
					message: "Nenhum item de menu encontrado para o restaurante.",
				});
			}

			return response.status(200).json({
				menu,
			});
		} catch (error) {
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	}
}

export default new MenusController();
