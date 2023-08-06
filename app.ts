import express, { Express } from 'express';
import logger from 'morgan';

import TicketsController from './controllers/tickets.controller';
import { handleError } from './middlewares/error_handling';
import { validateGetTickets } from './middlewares/request_validation';

export const app: Express = express();
const port: number = 4000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});

app.use(logger('dev'));

app.get('/tickets', validateGetTickets, TicketsController.getAll);

app.use(handleError);
