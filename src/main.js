// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import utils from './utils';
import Lang from '@/lang';
import store from '@/store';
import 'normalize.css';

Vue.config.productionTip = false; 

Vue.use(Lang);
Vue.use(utils);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});
