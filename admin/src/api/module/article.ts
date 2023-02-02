import http from '@/utils/axios';


// 获取文章列表
export const getArticleList = () => {
	return http.request({
		url: '/api/article/getArticleList',
		method: 'GET',
	});
}

// 新增文章
export const addArticle = (data: any) => {
	return http.request({
		url: '/api/article/addArticle',
		method: 'POST',
		data,
	});
}

// 删除文章	
export const deleteArticle = (params: any) => {
	return http.request({
		url: '/api/article/deleteArticle/' + params,
		method: 'DELETE'
	});
}
