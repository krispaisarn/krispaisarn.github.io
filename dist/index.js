"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _disableScroll = _interopRequireDefault(require("disable-scroll"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var wrapperStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};
var maskStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100000
};
var containerStyle = {
  position: 'relative',
  zIndex: 100001
};

var Modal = function Modal(_ref) {
  var children = _ref.children,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      close = _ref.close,
      _ref$elementId = _ref.elementId,
      elementId = _ref$elementId === void 0 ? 'root' : _ref$elementId;

  if (isOpen === false) {
    return null;
  }

  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: maskStyle,
    onClick: close
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: containerStyle
  }, children)), document.getElementById(elementId));
};

var useModal = function useModal() {
  var elementId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'root';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$preventScrol = options.preventScroll,
      preventScroll = _options$preventScrol === void 0 ? false : _options$preventScrol;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var open = (0, _react.useCallback)(function () {
    setOpen(true);

    if (preventScroll) {
      _disableScroll["default"].on();
    }
  }, [setOpen, preventScroll]);
  var close = (0, _react.useCallback)(function () {
    setOpen(false);

    if (preventScroll) {
      _disableScroll["default"].off();
    }
  }, [setOpen, preventScroll]);
  var ModalWrapper = (0, _react.useCallback)(function (_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/_react["default"].createElement(Modal, {
      isOpen: isOpen,
      close: close,
      elementId: elementId
    }, children);
  }, [isOpen, close, elementId]);
  return [ModalWrapper, open, close, isOpen];
};

var _default = useModal;
exports["default"] = _default;