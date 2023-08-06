import { Request, Response } from 'express';
import { AppError, HttpCode } from '../exceptions/app_error';

export function handleError(error: Error, req: Request, res: Response, next: any) {
	const { message } = error;
	if (error instanceof AppError) {
		const { httpCode } = error;
		res.sendStatus(httpCode);
	} else {
		res.sendStatus(HttpCode.BAD_REQUEST);
	}
	console.error(message);
}
