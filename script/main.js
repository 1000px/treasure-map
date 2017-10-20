import TreasureMap from './map.js'

window.onload = function () {
	var map = document.getElementById('map');
	new TreasureMap({svg: map}).init();
}