import { prisma } from "../database/prisma.provider.js";

class UserService {
	async findUsers() {
		return await prisma.users.findMany();
	}

	async findById(id) {
		return await prisma.users.findUniqueOrThrow({
			where: { id: Number(id) },
		});
	}

	async findByEmail(email) {
		return await prisma.users.findUniqueOrThrow({
			where: { email: email },
		});
	}

	async create(payload) {
		return await prisma.users.create({
			data: payload,
		});
	}

	async update(id, payload) {
		return await prisma.users.update({
			where: { id: Number(id) },
			data: payload,
		});
	}

	async delete(id) {
		return await prisma.users.delete({
			where: { id: Number(id) },
		});
	}
}

export default new UserService();
