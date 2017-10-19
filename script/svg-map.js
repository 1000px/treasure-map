import config from './map-config.json'

//私有对象
var _trMap = {};

// 藏宝图构造器
function TreasureMap (opts) {
	_trMap.svg = opts.svg;
	this.width = opts.width || config.width;
	this.height = opts.height || config.height;
}

// 初始化地图
TreasureMap.prototype.init = function() {
	_initShapes();

	// 初始化鼠标交互--点击
	_trMap.svg.addEventListener('click', function(e) {
		console.log('mouse click ...');
	})
	// 初始化鼠标交互--移动
	_trMap.svg.addEventListener('mousemove', function(e) {
		console.log('mouse moving ...');
	})
}

// 私有工具函数
// 初始化地图
function _initShapes() {
	_trMap.svg.innerHTML = '';
	var weightSum = 0;
	for(var province in config.weight) {
		weightSum += config.weight[province];
	}
	for(var item in config.shapes) {
		var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('d', config.shapes[item]);
		path.setAttribute('stroke', 'black');
		path.setAttribute('data-type', 'province');//类型
		path.setAttribute('data-province', item);//省份name
		path.setAttribute('data-province_name', config.names[item]);//省份名称
		path.setAttribute('fill', '#' + _toColorString(config.weight[item] / weightSum));
		_trMap.svg.appendChild(path);
	}
}

// 百分比转颜色 intVal:进制转换的数值 radix:需要转的进制
function _toColorString(pencentVal) {
	console.log(pencentVal);
	var str16 = 2096 + 680 * pencentVal;
	str16 = parseInt(str16).toString(16);
	str16.length === 1 && (str16 = '00' + str16);
	str16.length === 2 && (str16 = '0' + str16);
	// console.log(str16);
	// 返回值为组装好的3位16进制字符串
	return str16;
}

// 
export default TreasureMap