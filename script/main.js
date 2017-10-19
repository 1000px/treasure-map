import TreasureMap from './svg-map.js'

window.onload = function () {
	var map = document.getElementById('map');
	new TreasureMap({svg: map}).init();
}