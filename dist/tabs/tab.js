'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var defaultStyles = {
    backgroundColor: '#fff',
    border: '1px solid #b6bfce',
    marginTop: '-1px',
    padding: '20px'
};

exports.default = function (_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { style: defaultStyles },
        children
    );
};