import config from './map-config.json'

//私有对象
var _trMap = {};

// 藏宝图构造器
function TreasureMap (opts) {
	_trMap.svg = opts.svg;
	_trMap.colors = [];
	this.width = opts.width || config.width;
	this.height = opts.height || config.height;
}

// 初始化地图
TreasureMap.prototype.init = function() {
	_initShapes();
	_initColors();

	// 初始化鼠标交互--点击
	_trMap.svg.addEventListener('click', function(e) {
		if(e.target.getAttribute('data-type') === 'province') {
			e.target.setAttribute('data-color', config.opts.active);
		}
		_initColors();
	})
	// 初始化鼠标交互--移动
	_trMap.svg.addEventListener('mousemove', function(e) {
		_initColors();
		if(e.target.getAttribute('data-type') === 'province') {
			e.target.setAttribute('fill', config.opts.hover);
		}
	})
}

// 私有工具函数
// 初始化地图路径
function _initShapes() {
	_trMap.svg.innerHTML = '';
	var weightSum = 0;
	for(var province in config.weight) {
		weightSum += config.weight[province];
	}
	for(var item in config.shapes) {
		var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('d', config.shapes[item]);
		path.setAttribute('stroke', config.opts.border);
		path.setAttribute('data-type', 'province');//类型
		path.setAttribute('data-province', item);//省份name
		path.setAttribute('data-province_name', config.names[item]);//省份名称
		path.setAttribute('data-weight', '' + (config.weight[item] / weightSum));
		path.setAttribute('data-color', '#' + _toColorString(config.weight[item] / weightSum));
		_trMap.svg.appendChild(path);
	}
}
// 初始化地图颜色
function _initColors() {
	for(var _index = 0, _length = _trMap.svg.childNodes.length; _index < _length; _index++) {
		var _node = _trMap.svg.childNodes[_index];
		_node.setAttribute('fill', _node.getAttribute('data-color'))
	}
}

// 百分比转颜色 pencentVal:需要转换为颜色的权重值 radix:需要转的进制
function _toColorString(pencentVal) {
	var str16 = 1096 + 680 * pencentVal;
	str16 = parseInt(str16).toString(16);
	str16.length === 1 && (str16 = '00' + str16);
	str16.length === 2 && (str16 = '0' + str16);
	// 返回值为组装好的3位16进制字符串
	return str16;
}

// 
export default TreasureMap