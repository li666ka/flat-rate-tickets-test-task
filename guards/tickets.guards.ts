import { TicketFiltersDto } from '../controllers/dto/ticket_filters.dto';
import { isObject, isString } from './_base.guards';

export function isTicketFiltersDto(value: unknown): value is TicketFiltersDto {
	return isObject(value) && 'packageId' in value && isString(value.packageId);
}
