import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

export const TicketType = new GraphQLObjectType({
	name: 'Ticket',
	fields: () => ({
		Section: { type: GraphQLString },
		Row: { type: GraphQLString },
		SeatNumber: { type: GraphQLString },
		Price: { type: GraphQLInt },
	}),
});
