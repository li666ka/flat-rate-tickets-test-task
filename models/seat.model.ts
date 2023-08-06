import axios from 'axios';

export interface Seat {
	Id: number;
	SectionId: number;
	SeatRow: string;
	SeatNumber: string;
	ZoneId: number;
	SeatStatusId: number;
}

export class SeatRepository {
	public static async getAllByPackageId(packageId: number): Promise<Seat[]> {
		const { data } = await axios.get(
			`https://my.laphil.com/en/rest-proxy/TXN/Packages/${packageId}/Seats`,
			{
				params: {
					constituentId: 0,
					modeOfSaleId: 26,
					packageId: packageId,
				},
			}
		);
		return data;
	}
}
