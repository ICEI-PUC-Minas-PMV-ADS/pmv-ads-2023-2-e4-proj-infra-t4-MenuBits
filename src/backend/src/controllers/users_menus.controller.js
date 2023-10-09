import UsersMenusService from "../services/users_menus.service.js";
import UserService from "../services/user.service.js";
import MenusService from "../services/menus.service.js";

class UsersMenusController {

  //esse é o endpoint para favoritar cardápio

  async createRelationUserToMenu(request, response) {
    try {

      if (!request.body.userId || !request.body.menuId) {
        return response.status(400).json({
          status: 400,
          message: "É necessário informar o 'userId' e o 'menuId'"
        });
      }

      try {
        await UserService.findById(request.body.userId)
        await MenusService.findMenuById(request.body.menuId)

      } catch (error) {

        return response.status(404).json({
          status: 404,
          message: 'Dados não encontrados para realizar o relacionamento',
          error: error.message
        });
      }

      const relationMenuToUser = await UsersMenusService.findRelation(
        request.body.userId,
        request.body.menuId
      )

      if (relationMenuToUser) {
        return response.status(400).json({
          status: 400,
          message: 'O usuário já tem esse cardápio como favorito'
        });
      }

      const UsersMenus = await UsersMenusService.create(request.body);

      return response.status(201).json({
        status: 201,
        success: true,
        data: UsersMenus,
      });

    } catch (error) {
      return response.status(500).json({
        status: 500,
        message: 'Não foi possível favoritar o cardápio',
        error: error.message
      });
    }
  }

  async deleteRelationUserToMenu(request, response) {
    try {

      if (!request.params.userId || !request.params.menuId) {
        return response.status(400).json({
          status: 400,
          message: "É necessário informar o 'userId' e o 'menuId'"
        });
      }

      const relationMenuToUser = await UsersMenusService.findRelation(
        parseInt(request.params.userId),
        parseInt(request.params.menuId)
      )

      if (!relationMenuToUser) {
        return response.status(404).json({
          status: 404,
          message: 'Vínculo de cardápio favorito não encontrado para esse usuário'
        });
      }

      await UsersMenusService.delete(
        relationMenuToUser.id
      );

      return response.sendStatus(204);
    } catch (error) {
      return response.status(500).json({
        error: `Não foi possível excluir vínculo de cardápio favorito ${error.message}`
      });
    }
  }
}

export default new UsersMenusController();