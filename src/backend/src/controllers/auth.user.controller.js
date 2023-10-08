import pkg from "bcryptjs";
const { compare } = pkg;
// import {sign} from "jsonwebtoken";
import pki from "jsonwebtoken";
const { sign } = pki;
import { prisma } from "../database/prisma.provider.js";

class AuthUserController {
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

    if (!isValuePass) {
      return res.json({ error: "Password invalid" });
    }

    const authToken = sign({ id: user.id }, "secret", {
      expiresIn: "1d",
    });
    const { id } = user;
    return res.json({ user: { id, email }, authToken });
  }
}

export default AuthUserController;
