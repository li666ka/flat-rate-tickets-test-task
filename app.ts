import express, { Express } from 'express';
import { graphqlHTTP } from 'express-graphql';
import logger from 'morgan';

import { schema } from './schema/schema';
import { handleError } from './middlewares/error_handling';

export const app: Express = express();
const port: number = 4000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});

app.use(logger('dev'));

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.use(handleError);
