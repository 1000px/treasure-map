import axios from '@/common/ajax';

/**
* @name getUserInfo
* @params null
*/
function getUserInfo (params) {
	return axios({
		url: 'list',
		method: 'get',
		params: params
	});
}

export {
	getUserInfo
};
