const bcrypt = require("bcrypt");

export async function hashPassword(password) {
  const saltRounds = 8;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

export async function comparePasswords(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}