import bcryptjs from "bcryptjs";
import { prisma } from "../database/prisma.provider.js";
import jsonwebtoken from "jsonwebtoken";

class AuthController {
  async authenticate(req, res) {
    const { email, password } = req.body;
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.json({ error: "User not found" });
    }
    const isValuePass = await bcryptjs.compare(password, user.password);
    const authToken = jsonwebtoken.sign({ id: user.id, name: user.name }, "secret", {
      expiresIn: "1d",
    });
    const { id } = user;
    return res.json({ user: { id, email }, authToken });
  }
}

export default new AuthController();