export enum HttpCode {
	OK = 200,
	BAD_REQUEST = 400,
	INTERNAL_SERVER_ERROR = 500,
}

export class AppError extends Error {
	public readonly httpCode: HttpCode;

	constructor(httpCode: HttpCode, message: string) {
		super(message);
		Object.setPrototypeOf(this, new.target.prototype);
		this.httpCode = httpCode;
	}
}
