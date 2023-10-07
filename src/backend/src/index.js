import express, { json } from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import router from './routes/router.js';
import { readFile } from 'fs/promises';
import mongoose from "mongoose";

const swaggerDocument = JSON.parse(
  await readFile(new URL('./document/swagger.json', import.meta.url))
);

const app = express();
app.use(cors());
app.use(json({ limit: '50mb' }));
app.use('/swagger', serve, setup(swaggerDocument));
app.use(router);

const port = process.env.PORT || 8080;

const server = app.listen(port, async () => {
  console.log(`O servidor está escutando na porta ${port}`);
  mongoose.connect(process.env.MONGO_DATABASE_URL, { useNewUrlParser: true }).then(() => {
    console.log("MongoDB conectado com sucesso!");
  }).catch((err) => {
    console.log("Erro na ligação ao MongoDB! " + err.message);
  });

  console.log(`O swagger está disponível em http://localhost:${port}/swagger`)
});

export default server;