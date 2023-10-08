import { prisma } from "../database/prisma.provider.js";

class GroupsService {
	async findAllGroups() {
		return await prisma.groups.findMany();
	}

	async findById(id) {
		return await prisma.groups.findFirst({
			where: { id },
		});
	}

    async findGroupByName(name) {
		return await prisma.groups.findFirst({
			where: { name },
		});
	}

	async create(payload) {
		return await prisma.groups.create({
			data: payload,
		});
	}

	async update(id, payload) {
		return await prisma.groups.update({
			where: { id },
			data: payload,
		});
	}

	async delete(id) {
		return await prisma.groups.delete({
			where: { id },
		});
	}
}

export default new GroupsService();
