import pkg from "jsonwebtoken"
const { verify } = pkg

export async function AuthMiddlewares(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ error: "Token not provided" });
  }
  const [, token] = authorization.split(" ");
  try {
    const decoded = verify(token, "secret");
    const { id } = decoded;
    res.userId = id;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }
}
