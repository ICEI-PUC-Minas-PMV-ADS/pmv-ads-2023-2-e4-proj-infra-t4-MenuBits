import MenusService from "../services/menus.service.js";
import RestaurantsService from "../services/restaurante.service.js";

class MenusController {

	async create(request, response) {
		try {
			const { title, restaurantId } = request.body;

			if(!title || !restaurantId) {
				return response.status(400).json({
					status: 400,
					message: "O campo de 'title' e 'restaurantId' precisam ser informados",
				});
			}

			const restaurant = await RestaurantsService.findById(restaurantId)

			if(!restaurant) {
				return response.status(404).json({
					status: "Not Found",
					message: "Restaurante especificado não existe",
				});
			}

			const menu = await MenusService.createMenu(title, restaurantId);

			return response.status(201).json({
                status: 201,
                success: true,
                data: menu
            });
		} catch (error) {
			response.status(500).json({ error: error.message });
		}
	}

	async update(request, response) {
		try {
			const id = parseInt(request.params.id);

			const menuValidation = await MenusService.findMenuById(id)

			if(!menuValidation) {
				return response.status(404).json({
					status: "Not Found",
					message: "Cardápio especificado não existe",
				});
			}
			const updatedMenu = await MenusService.updateMenu(id, request.body);

			return response.status(201).json({
                status: 201,
                success: true,
                data: updatedMenu
            });
		} catch (error) {
			response.status(500).json({ error: error.message });
		}
	}

	async delete(request, response) {
		try {
			const id = parseInt(request.params.id);

			const menuValidation = await MenusService.findMenuById(id)
		
			  if(!menuValidation) {
				return response.status(404).json({
				  status: 404,
				  message: 'Menu especificado não existe'
				});
			  }	

			await MenusService.deleteMenu(id);

			response.status(204).json({ message: "Cardápio excluído com sucesso." });
		} catch (error) {
			response.status(500).json({ error: error.message });
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
			return response.status(500).json({ error: error.message });
		}
	}
}

export default new MenusController();
