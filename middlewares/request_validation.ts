import { Request, Response } from 'express';
import { isTicketFiltersDto } from '../guards/tickets.guards';
import { AppError, HttpCode } from '../exceptions/app_error';

export function validateGetTickets(error: Error, req: Request, res: Response, next: any) {
	const { query } = req;
	if (!isTicketFiltersDto(query))
		throw new AppError(HttpCode.BAD_REQUEST, 'Incorrect TicketFiltersDto');
	next();
}
