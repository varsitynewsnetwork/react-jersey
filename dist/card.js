'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// eslint-disable-line no-unused-vars

var defaultStyles = {
  backgroundColor: '#fff',
  borderTop: '4px solid #2c3e50',
  borderRadius: '5px',
  padding: '10px'
};

exports.default = function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var styles = Object.assign(defaultStyles, props);

  return _react2.default.createElement(
    'div',
    { style: defaultStyles },
    children
  );
};