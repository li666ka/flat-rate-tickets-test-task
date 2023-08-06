export function isString(input: any): input is string {
	return typeof input === 'string' && input !== '';
}

export function isObject(input: any): input is object {
	return typeof input === 'object';
}
