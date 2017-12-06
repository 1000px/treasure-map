<template>
	<div>
		<svg 
		id="map"
		ref="c_map" 
		width="1000" 
		height="800" 
		viewBox="0,-10,570,490"></svg>
	</div>
</template>

<script>
import TreasureMap from 'static/map.js';

export default {
	name: 'home',
	data () {
		return {
			message: 'map'
		};
	},
	mounted () {
		let map = this.$refs.c_map;
		this.Logger.log(map);
		new TreasureMap({svg: map}).init();
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: normal;
}
</style>