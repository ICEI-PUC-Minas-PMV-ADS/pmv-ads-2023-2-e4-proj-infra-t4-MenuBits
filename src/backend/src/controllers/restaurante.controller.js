import bcrypt from "bcryptjs";
import { prisma } from "../database/prisma.provider.js";
import { default as RestauranteService, default as restauranteService } from "../services/restaurante.service.js";

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
    console.log("[+] Find by ID");
    const { id } = request.params;
    try {
      const restaurant = await RestauranteService.findById(id);
      if (restaurant === null) {
        return response.status(404).json({
          status: "Not Found",
          message: "Restaurante não encontrado.",
        });
      } else {
        return response.status(200).json({
          restaurant,
        });
      }
    } catch (err) {
      console.error("Erro ao encontrar o restaurante:", err);
      return response.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async findByEmail(request, response) {
    console.log("[+] Find by Email");
    const { email } = request.params;
    try {
      const restaurant = await RestauranteService.findByEmail(email);
      if (restaurant === null) {
        return response.status(404).json({
          status: "Not Found",
          message: "Restaurante não encontrado.",
        });
      } else {
        return response.status(200).json({
          restaurant,
        });
      }
    } catch (err) {
      console.error("Erro ao encontrar o restaurante:", err);
      return response.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async create(request, response) {
    try {

      const {
        email,
        name,
        password,
        phone,
        city,
        uf,
        location,
        description
      } = request.body
      const hash = await bcrypt.hash(password, 10);
      const findRestaurant = await prisma.restaurants.findUnique({where: {
        email
      }})
      if(findRestaurant) {
        return res.json({ error: "Restaurant already exists" })
      }
      const restaurant = await prisma.restaurants.create({
        data: {
          email,
          name,
          password: hash,
          phone,
          city,
          uf,
          location,
          description
        }
      })
      return response.status(201).json({
        restaurant
      });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const data = request.body;

    try {
      console.log("[+] Update restaurant");
      const restaurant = await restauranteService.update(parseInt(id), data);
      console.log(restaurant);
      return response.status(200).json({
        data: restaurant,
      });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async delete(request, response) {
    const { id } = request.params;
    try {
      await RestauranteService.delete(parseInt(id));

      return response.status(204).json({
        message: "DELETADO COM SUCESSO",
      });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export default new RestauranteController();
