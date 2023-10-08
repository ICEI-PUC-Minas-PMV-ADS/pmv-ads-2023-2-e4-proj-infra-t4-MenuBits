const { compare } = require("bcryptjs");
const { prisma } = require("../database/prisma.provider");
const { sign } = require("jsonwebtoken");

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
    const isValuePass = await compare(password, user.password);
    const authToken = sign({ id: user.id }, "secret", {
      expiresIn: "1d",
    });
    const { id } = user;
    return res.json({ user: { id, email }, authToken });
  }
}

export default AuthController;