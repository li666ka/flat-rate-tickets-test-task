import axios from 'axios';

export interface Price {
	PackageId: number;
	ZoneId: number;
	Price: number;
	PerformanceId: number;
}

export class PriceRepository {
	public static async getAllByPackageId(packageId: number): Promise<Price[]> {
		const { data } = await axios.get(
			`https://my.laphil.com/en/rest-proxy/TXN/Packages/${packageId}/Prices`,
			{
				params: {
					sourceId: 30885,
					modeOfSaleId: 26,
				},
			}
		);
		return data;
	}
}
