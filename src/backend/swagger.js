import swaggerAutogen from 'swagger-autogen';

const port = process.env.PORT || 8080;

const doc = {
    info: {
        title: 'MenuBits API',
        description: '',
    },
    host: 'localhost:' + port,
    schemes: ['http'],
};

const outputFile = './src/document/swagger.json';
const endpointsFiles = ['./src/routes/router.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);

