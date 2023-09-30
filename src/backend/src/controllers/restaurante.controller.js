import RestauranteService from "../services/restaurante.service.js";

class RestauranteController {
  async findAll(request, response) {
    try {
      const users = await RestauranteService.findUsers();

      return response.json({
        success: true,
        data: users,
      });
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }

  async findById(request, response) {
    try {
      const user = await RestauranteService.findById(request.params.id);

      return response.json({
        success: true,
        data: user,
      });
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }

  async create(request, response) {
    try {
      const user = await RestauranteService.create(request.body);

      return response.status(201).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async update(request, response) {
    try {
      const user = await RestauranteService.update(request.params.id, request.body);

      return response.json({
        success: true,
        data: user,
      });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async delete(request, response) {
    try {
      await RestauranteService.delete(request.params.id);

      return response.sendStatus(204);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export default new RestauranteController();