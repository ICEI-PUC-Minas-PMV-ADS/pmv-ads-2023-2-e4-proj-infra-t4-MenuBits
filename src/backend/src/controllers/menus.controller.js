import MenusService from "../services/menus.service.js";

class MenusController {
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
