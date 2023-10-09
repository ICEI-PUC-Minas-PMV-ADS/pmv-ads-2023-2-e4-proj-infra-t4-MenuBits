import GroupsService from "../services/groups.service.js";

class GroupsController {
    async findAll(request, response) {
        try {
            const users = await GroupsService.findAllGroups();

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
            const group = await GroupsService.findById(request.params.id);

            if (!group) {
                return response.status(404).json({
                    status: "Não encontrado",
                    message: "Nenhum grupo encontrado com o ID.",
                });
            }

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
            const payload = {
                name: request.body.name,
                imageUrl: request.body.imageUrl,
            }

            if (!request.body.name) {
                return response.status(400).json({
                    status: 400,
                    message: "É necessário informar o 'name' do grupo"
                });
            }

            const groupIdenticalNameValidation = await GroupsService.findGroupByName(payload.name)

            if(groupIdenticalNameValidation) {
                return response.status(400).json({
                    status: 400,
                    message: "Já existe um grupo com esse nome"
                });
            }

            const group = await GroupsService.create(payload);

            return response.status(201).json({
                success: true,
                data: group,
            });
        } catch (error) {
            return response.status(500).json({ 
              status: 500,
              message: 'Não foi possível criar o grupo',
              error: error.message
          });
        }
    }

    async update(request, response) {
        try {
            const payload = {
                name: request.body.name,
                imageUrl: request.body.imageUrl,
            }

            const groupIdenticalNameValidation = await GroupsService.findGroupByName(payload.name)

            if(groupIdenticalNameValidation) {
                return response.status(400).json({
                    status: 400,
                    message: "Já existe um grupo com esse nome"
                });
            }
            const group = await GroupsService.update(parseInt(request.params.id), payload);

            return response.json({
                success: true,
                data: group,
            });
        } catch (error) {
            return response.status(500).json({ 
              status: 500,
              message: 'Não foi possível atualizar o grupo',
              error: error.message
          });
        }
    }

    async delete(request, response) {
        try {

            const groupId = parseInt(request.params.id)

            const group = await GroupsService.findById(groupId);

            if(!group) {
                return response.status(404).json({ 
                    status: 404,
                    message: 'Não foi encontrado nenhum grupo com o ID',
                });
            }

            await GroupsService.delete(groupId);

            return response.sendStatus(204);
        } catch (error) {
            return response.status(500).json({ 
              status: 500,
              message: 'Não foi possível excluir o grupo',
              error: error.message
          });
        }
    }
}

export default new GroupsController();