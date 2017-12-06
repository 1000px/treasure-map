<template>
	<div class="hello">
		<h1>{{Lang.LIST_PAGE.NAV_TITLE }}</h1>
		<div v-for="article in articles">
			<router-link :to="{path: '/article'}">
                {{article.title}}
          	</router-link>
          	<span>{{article.desc}}</span>
        </div>
	</div>
</template>

<script>
import {getList} from '@/service/test';

export default {
	name: 'list',
	data () {
		return {
			articles: []
		};
	},
	created () {
		getList({}).then(response => {
			this.articles = response.data.articles;
		}).catch(error => {
			this.Logger.log(error);
		});
		this.$store.commit('increment');
		this.Logger.log(this.$store.state.count);
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: normal;
}
</style>