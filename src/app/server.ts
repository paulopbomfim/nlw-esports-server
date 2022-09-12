import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../doc/swagger.json';

const app = express();
const PORT = 3333;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (_req, res) => {
  res.status(200).send('Hello world');
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))