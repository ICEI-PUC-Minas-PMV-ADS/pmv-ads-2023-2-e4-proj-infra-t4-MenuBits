
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../database/prisma.provider.js";
class AuthController {

  async authenticate(req, res) {
    const { email, password } = req.body;
    const user = await prisma.users.findUnique({ where: { email } });
    if(!user) {
      return res.json({ error: "User not found" });
    }

    const isValuePass = await compare(password, user.password);

    if(!isValuePass) {
      return res.json({ error: "Password invalid" });
    }

    // Pass the ID first
    // "secret" - e colocado em .env e uma chave secreta da aplicacao
    const authToken = sign({ id: user.id}, "secret", { expiresIn: "1d" })
    const { id } = user;

    return res.json({ user: { id, email }, authToken });
  }
}
export default AuthController;