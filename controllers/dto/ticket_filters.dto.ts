import { ParsedQs } from 'qs';

export interface TicketFiltersDto extends ParsedQs {
	packageId: string;
}

export interface TicketFiltersDtoParsed {
	packageId: number;
}
