import axios from '@/common/ajax';

/**
* @name getList
* @params null
*/
function getList (params) {
	return axios({
		url: 'list',
		method: 'get',
		params: params
	});
}

/**
* @name getArticle
* @params id
*/
function getArticle (params) {
	return axios({
		url: 'article',
		method: 'get',
		params: params
	});
}

export {
	getList,
	getArticle
}; 
