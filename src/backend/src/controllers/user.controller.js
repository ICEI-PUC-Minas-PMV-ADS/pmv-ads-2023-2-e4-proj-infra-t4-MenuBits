import pkg from "bcryptjs";
const { hash } = pkg;
import mongoService from "../services/mongo.service.js";
import UserService from "../services/user.service.js";
import { prisma } from "../database/prisma.provider.js";

class UserController {
  async findAll(request, response) {
    try {
      const users = await UserService.findUsers();

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
      const user = await UserService.findById(request.params.id);

      return response.json({
        success: true,
        data: user,
      });
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }

  async create(request, response) {
    const { name, email, password } = request.body;
    try {
      const hash_password = await hash(password, 10);

      const findUser = await prisma.users.findUnique({
        where: { email },
      });
      if (findUser) {
        return response.json({
          error: "Usuário já cadastrado",
        });
      }
      const user = await prisma.users.create({
        data: {
          name,
          email,
          password: hash_password,
        },
      });
      return response.status(201).json({
        user,
      });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async update(request, response) {
    try {
      const payload = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
      };

      const user = await UserService.update(request.params.id, payload);

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
      await UserService.delete(request.params.id);

      return response.sendStatus(204);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async getUserHistory(request, response) {
    try {
      const accessHistory = await mongoService.getUserAccessHistory(
        request.params.id
      );

      return response.json({
        success: true,
        message: "Histórico de restaurantes acessados pelo usuário",
        data: accessHistory,
      });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
