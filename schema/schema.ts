import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt } from 'graphql';

import TicketsService from '../services/tickets.service';
import { TicketType } from './types/ticket.type';

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		tickets: {
			type: new GraphQLList(TicketType),
			args: { packageId: { type: GraphQLInt } },
			resolve(parent, args) {
				return TicketsService.find(args.packageId);
			},
		},
	},
});

export const schema = new GraphQLSchema({ query: RootQuery });
