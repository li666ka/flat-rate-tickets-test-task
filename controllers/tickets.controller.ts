import { Request, Response } from 'express';

import { TicketDto } from './dto/ticket.dto';
import TicketsService from '../services/tickets.service';
import { HttpCode } from '../exceptions/app_error';
import { TicketFiltersDto } from './dto/ticket_filters.dto';
import { parseTicketFiltersDto } from '../utils/parsing.util';

class TicketsController {
	public static async getAll(
		req: Request<never, never, never, TicketFiltersDto>,
		res: Response<TicketDto[]>
	) {
		const { query } = req;
		const dtoParsed = parseTicketFiltersDto(query);
		const tickets: TicketDto[] = await TicketsService.find(dtoParsed);
		res.status(HttpCode.OK).json(tickets);
	}
}

export default TicketsController;
