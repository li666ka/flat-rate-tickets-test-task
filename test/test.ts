import request from 'supertest';

import { app } from '../app';
import { tickets1183 } from './tickets';

test('Get Tickets of package with id 1183', async () => {
	await request(app)
		.post('/graphql')
		.send({
			query:
				'{' +
				'tickets(packageId: 1183) {' +
				'  Section,' +
				'  Row,' +
				'  SeatNumber,' +
				'  Price,' +
				'}' +
				'}',
		})
		.expect(200)
		.expect((res) => {
			expect(res.body.data.tickets).toEqual(tickets1183);
		});
});
