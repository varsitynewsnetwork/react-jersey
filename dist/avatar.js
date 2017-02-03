'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// eslint-disable-line no-unused-vars

var avatarService = function avatarService(size, uniqid) {
  return 'url(https://api.adorable.io/avatars/' + size + '/' + encodeURIComponent(uniqid) + ')';
};

var defaultStyles = {
  borderRadius: '50%',
  height: '90px',
  width: '90px'
};

exports.default = function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? '90' : _ref$size,
      _ref$url = _ref.url,
      url = _ref$url === undefined ? '' : _ref$url,
      _ref$uniqid = _ref.uniqid,
      uniqid = _ref$uniqid === undefined ? 'hello' : _ref$uniqid,
      props = _objectWithoutProperties(_ref, ['size', 'url', 'uniqid']);

  var backgroundImage = url || avatarService(size, uniqid);
  var styles = Object.assign(defaultStyles, props, {
    backgroundImage: backgroundImage,
    width: size + 'px',
    height: size + 'px'
  });

  return _react2.default.createElement('div', { style: defaultStyles });
};