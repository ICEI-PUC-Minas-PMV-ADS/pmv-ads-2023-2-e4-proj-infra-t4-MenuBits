import pkg from "bcryptjs"
const { compare } = pkg;
// import {sign} from "jsonwebtoken";
import pki from "jsonwebtoken"
const { sign } = pki;
import { prisma } from "../database/prisma.provider.js";

class AuthRestaurantController {
  async authenticate(req, res) {
    const { email, password } = req.body;

    if(!email || !password ) {
      return res.status(400).json({ error: "Informe o email e senha" });
    }

    const restaurant = await prisma.restaurants.findUnique({
      where: {
        email,
      },
    });
    if (!restaurant) {
      return res.json({ error: "Restaurant not found" });
    }
    
    const isValuePass = await compare(password, restaurant.password);

    if(!isValuePass) {
      return res.json({ error: "Password invalid" });
    }

    const authToken = sign({ id: restaurant.id }, "secret", {
      expiresIn: "1d",
    });
    const { id } = restaurant;
    return res.json({ restaurant: { id, email }, authToken });
  }
}

export default AuthRestaurantController;