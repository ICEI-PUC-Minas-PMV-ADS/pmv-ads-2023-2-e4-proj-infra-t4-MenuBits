import express, { json } from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import router from './routes/router.js';
import { readFile } from 'fs/promises';

const swaggerDocument = JSON.parse(
  await readFile(new URL('./document/swagger.json', import.meta.url))
);

const app = express();
app.use(cors());
app.use(json({ limit: '50mb' }));
app.use('/swagger', serve, setup(swaggerDocument));
app.use(router);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`O servidor está escutando na porta ${port}`);
  console.log(`O swagger está disponível em http://localhost:${port}/swagger`)
});

export default server;