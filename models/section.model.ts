import axios from 'axios';

export interface Section {
	Id: number;
	Description: string;
}

export class SectionRepository {
	public static async getAll(): Promise<Section[]> {
		const { data } = await axios.get(
			`https://my.laphil.com/en/rest-proxy/ReferenceData/Sections`
		);

		return data;
	}
}
