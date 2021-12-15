"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var c = [{
  name: '排名',
  width: '20%'
}, {
  name: '平台名称',
  width: '50%'
}, {
  name: '综合指数',
  width: '30%'
}];
var d = [{
  order: 1,
  platName: 'mock数据1111111111111111',
  cpIndex: '0.4857'
}, {
  order: 2,
  platName: 'mock数据2222222222222222',
  cpIndex: '0.3956'
}, {
  order: 3,
  platName: 'mock数据3333333333333333',
  cpIndex: '0.36'
}, {
  order: 4,
  platName: 'mock数据4444444444444444',
  cpIndex: '0.4857'
}, {
  order: 5,
  platName: 'mock数据5555555555555555',
  cpIndex: '0.3163'
}, {
  order: 6,
  platName: 'mock数据6666666666666666',
  cpIndex: '0.517'
}, {
  order: 7,
  platName: 'mock数据7777777777777777',
  cpIndex: '0.61'
}, {
  order: 8,
  platName: 'mock数据8888888888888888',
  cpIndex: '0.443'
}, {
  order: 9,
  platName: 'mock数据9999999999999999',
  cpIndex: '0.216'
}];

var TggTableScroll = function TggTableScroll(props) {
  var _props$columns = props.columns,
      columns = _props$columns === void 0 ? c : _props$columns,
      _props$data = props.data,
      data = _props$data === void 0 ? d : _props$data,
      _props$width = props.width,
      width = _props$width === void 0 ? '100%' : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 250 : _props$height;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isScrolle = _useState2[0],
      setIsScrolle = _useState2[1]; // 滚动速度，值越小，滚动越快


  var speed = 30;
  var warper = (0, _react.useRef)();
  var childDom1 = (0, _react.useRef)();
  var childDom2 = (0, _react.useRef)(); // 开始滚动

  (0, _react.useEffect)(function () {
    // 多拷贝一层，让它无缝滚动
    childDom2.current.innerHTML = childDom1.current.innerHTML;
    var timer;

    if (isScrolle) {
      timer = setInterval(function () {
        return warper.current.scrollTop >= childDom1.current.scrollHeight ? warper.current.scrollTop = 0 : warper.current.scrollTop++;
      }, speed);
    }

    return function () {
      clearTimeout(timer);
    };
  }, [isScrolle, data]);

  var hoverHandler = function hoverHandler(flag) {
    return setIsScrolle(flag);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _style["default"].container,
    style: {
      width: width,
      height: height
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _style["default"].headerBox,
    style: {
      width: '100%',
      height: 55,
      backgroundColor: '#f2f5fb'
    }
  }, columns.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: _style["default"].headerItem,
      style: {
        borderRight: index !== columns.length - 1 ? '1px solid rgba(0,0,0,.06)' : '',
        width: (item === null || item === void 0 ? void 0 : item.width) || "".concat(100 / columns.length, "%")
      }
    }, item.name);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: _style["default"].parent,
    ref: warper
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _style["default"].child,
    ref: childDom1
  }, data && data.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: _style["default"].line,
      onMouseOver: function onMouseOver() {
        return hoverHandler(false);
      },
      onMouseLeave: function onMouseLeave() {
        return hoverHandler(true);
      }
    }, Object.keys(item).map(function (ele, key) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: key,
        className: _style["default"].lineItem,
        style: {
          width: columns[key].width || "".concat(100 / columns.length, "%")
        }
      }, item[ele]);
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: _style["default"].child,
    ref: childDom2
  })));
};

var _default = TggTableScroll;
exports["default"] = _default;