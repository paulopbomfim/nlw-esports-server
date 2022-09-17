import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import '../shared/container';

import swaggerFile from '../doc/swagger.json';

import {router} from '../routes';
import { AppError } from "../errors/AppError";

const app = express();
const port = 3333;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    console.log(error.message);
    return response.status(error.statusCode).json({ message: error.message });
  }
	console.log(error.message);
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${error.message}`,
  });
});

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});
