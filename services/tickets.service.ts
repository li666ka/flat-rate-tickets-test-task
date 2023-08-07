import { Seat, SeatRepository } from '../models/seat.model';
import { Section, SectionRepository } from '../models/section.model';
import { Price, PriceRepository } from '../models/price.model';
import { AppError, HttpCode } from '../exceptions/app_error';

export interface TicketDto {
	Section: string;
	Row: string;
	SeatNumber: string;
	Price: number;
}

class TicketsService {
	private static readonly SEAT_AVAILABLE_STATUS_ID = 0;

	public static async find(packageId: number): Promise<TicketDto[]> {
		const seats: Seat[] = await SeatRepository.getAllByPackageId(packageId);
		const seatsAvailable: Seat[] = seats.filter(
			(seat) => seat.SeatStatusId === this.SEAT_AVAILABLE_STATUS_ID
		);

		if (seatsAvailable.length === 0) return [];

		return await this.parseToDto(seatsAvailable, packageId);
	}

	private static async parseToDto(
		seats: Seat[],
		packageId: number
	): Promise<TicketDto[]> {
		let [prices, sections] = await Promise.all([
			PriceRepository.getAllByPackageId(packageId),
			SectionRepository.getAll(),
		]);

		prices = prices as Price[];
		sections = sections as Section[];

		const tickets: TicketDto[] = [];
		for (const seat of seats) {
			const { SectionId, SeatRow, SeatNumber, ZoneId } = seat;
			const section: Section | undefined = sections.find(
				(section) => section.Id === SectionId
			);
			const price: Price | undefined = prices.find(
				(price) => price.ZoneId === ZoneId && price.PerformanceId === 0
			);

			if (!section)
				throw new AppError(
					HttpCode.BAD_REQUEST,
					`Section with id ${SectionId} does not exist`
				);
			if (!price)
				throw new AppError(
					HttpCode.BAD_REQUEST,
					`Price with ZoneId ${ZoneId} and PerformanceId ${0} does not exist`
				);

			const ticket: TicketDto = {
				Section: section.Description,
				Row: SeatRow,
				SeatNumber: SeatNumber,
				Price: price.Price,
			};

			tickets.push(ticket);
		}

		return tickets;
	}
}

export default TicketsService;
