<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>{{Lang.HELP}}</h2>
	</div>
</template>

<script>
export default {
	name: 'header',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		};
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
