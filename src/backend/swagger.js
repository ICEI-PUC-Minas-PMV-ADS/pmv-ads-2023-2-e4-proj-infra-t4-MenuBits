import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8080;
const host = process.env.HOST_URL || `localhost:${port}`;

const doc = {
    info: {
        title: 'MenuBits API',
        description: 'API Endpoints for MenuBits',
    },
    host,
    schemes: process.env.HOST_URL ? ['https'] : ['http'],
};

const outputFile = './src/document/swagger.json';
const endpointsFiles = ['./src/routes/router.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);

