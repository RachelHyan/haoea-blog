import http from '@/utils/axios';

// 登录
interface IResponseType<P = {}> {
	code: number;
	status: number;
	message: string;
	data: P;
};
interface ILogin {
	token: string;
	expires: number;
}

export const register = (account:string,password:string) => {
	return http.request<IResponseType<ILogin>>({
		url: '/api/user/register',
		method: 'POST',
		data: {
			account,
			password
		},
	});
}

export const login = (account:string,password:string) => {
	return http.request<IResponseType<ILogin>>({
		url: '/api/user/login',
		method: 'POST',
		data: {
			account,
			password
		},
	});
}
