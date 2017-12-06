// import Axios from '@/common/ajax';
// import Config from '@/config';
import CurrentLanguage from '@/lang/cn.json';

// let lang = Config.LANGUAGE || navigator.browserLanguage || navigator.language;

export default {
	install (Vue, options) {
		Vue.prototype.Lang = CurrentLanguage;
		// Axios.ajax(Config.BASE_URL + '/lang/' + lang + '.json', 'get').then((response) => {
		// 	Vue.prototype.Lang = response.language;
		// }).catch((err) => {
		// 	console.log(err);
		// });
	}
};
