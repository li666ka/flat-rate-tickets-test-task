import {
	TicketFiltersDto,
	TicketFiltersDtoParsed,
} from '../controllers/dto/ticket_filters.dto';
import { AppError, HttpCode } from '../exceptions/app_error';

export function parseTicketFiltersDto(
	ticketFiltersDto: TicketFiltersDto
): TicketFiltersDtoParsed {
	const { packageId } = ticketFiltersDto;
	const packageIdParsed = parseToInt(packageId);
	return { packageId: packageIdParsed };
}

export function parseToInt(value: string): number {
	const parsedToNumber = Number(value); // can be `float` or be parsed by another radix
	const parsedToInt = parseInt(value, 10);
	const parsed =
		Number.isInteger(parsedToNumber) && parsedToInt === parsedToNumber
			? parsedToInt
			: NaN;

	if (isNaN(parsed))
		throw new AppError(HttpCode.BAD_REQUEST, 'Can`t be parsed to integer');
	return parsed;
}
