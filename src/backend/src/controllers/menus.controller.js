import MenusService from "../services/menus.service.js";

class MenusController {
	async getItemsByRestaurantId(request, response) {
		const { restaurantId } = request.params;
		console.log();
		try {
			// Chame a função do serviço para buscar itens de menu com base no ID do restaurante.
			const menu = await MenusService.findMenuByRestaurantId(
				restaurantId, // Certifique-se de converter o ID para um número.
			);

			// Verifique se há itens de menu encontrados.
			if (menu.length === 0) {
				return response.status(404).json({
					status: "Not Found",
					message: "Nenhum item de menu encontrado para o restaurante.",
				});
			}

			// Retorne os itens de menu encontrados em uma resposta JSON.
			return response.status(200).json({
				menu,
			});
		} catch (error) {
			console.error("Erro ao buscar itens de menu:", error);
			return response.status(500).json({ error: "Erro interno do servidor." });
		}
	}
}

export default new MenusController();
