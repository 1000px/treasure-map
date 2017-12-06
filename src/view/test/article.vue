<template>
	<div class="hello">
		<div>
			<h3><span>{{Lang.DETAIL_PAGE.TITLE}}:</span>{{article.title}}</h3>
			<p><span>{{Lang.DETAIL_PAGE.DESC}}:</span>{{article.desc}}</p>
			<p><span>{{Lang.DETAIL_PAGE.CONTENT}}:</span>{{article.content}}</p>
		</div>
	</div>
</template>

<script>
import {getArticle} from '@/service/test';

export default {
	name: 'article',
	data () {
		return {
			article: {}
		};
	},
	created () {
		getArticle({}).then(response => {
			this.article = response.data;
		}).catch(error => {
			this.Logger.log(2, error);
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: normal;
	color: red;
}
</style>
