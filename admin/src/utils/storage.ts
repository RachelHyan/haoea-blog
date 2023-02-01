export const setItem = (key: string, value: any) => {
	if(typeof value === 'object') {
		value = JSON.stringify(value);
	}

	localStorage.setItem(key, value);
}

export const getItem = (key: string) => {
	const data:any = localStorage.getItem(key);
	try {
		return JSON.parse(data);
	} catch (error) {
		return data;
	}
}

export const removeItem = (key: string) => {
	localStorage.removeItem(key);
}
