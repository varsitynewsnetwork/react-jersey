'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var containerStyles = {
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0
};

var tabStyles = {
  backgroundColor: '#b6bfce',
  borderLeft: '1px solid #b6bfce',
  borderRight: '1px solid #b6bfce',
  borderTop: '4px solid transparent',
  color: '#fff',
  fontSize: '0.85em',
  marginRight: '10px',
  padding: '10px 20px'
};

var activeTabStyles = {
  backgroundColor: '#fff',
  borderTop: '4px solid #2980b9',
  borderLeft: '1px solid #b6bfce',
  borderRight: '1px solid #b6bfce',
  color: '#2c3e50',
  cursor: 'pointer'
};

var TabGroup = function (_React$Component) {
  _inherits(TabGroup, _React$Component);

  function TabGroup(props) {
    _classCallCheck(this, TabGroup);

    var _this = _possibleConstructorReturn(this, (TabGroup.__proto__ || Object.getPrototypeOf(TabGroup)).call(this, props));

    _this.setActive = function (index) {
      return function () {
        _this.setState({ active: index });
      };
    };

    _this.onMouseEnter = function (index) {
      return function () {
        _this.setState({ hoverIndex: index });
      };
    };

    _this.onMouseLeave = function () {
      return _this.setState({ hoverIndex: -1 });
    };

    _this.state = { active: 0, hoverIndex: -1 };
    return _this;
  }

  _createClass(TabGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { style: containerStyles },
          _react2.default.Children.map(children, function (child, index) {
            var styles = Object.assign({}, tabStyles, _this2.state.active === index || _this2.state.hoverIndex === index ? activeTabStyles : {});
            return _react2.default.createElement(
              'li',
              {
                style: styles,
                onClick: _this2.setActive(index),
                onMouseEnter: _this2.onMouseEnter(index),
                onMouseLeave: _this2.onMouseLeave
              },
              child.props.title
            );
          })
        ),
        _react2.default.Children.map(children, function (child, index) {
          return index === _this2.state.active ? child : '';
        })
      );
    }
  }]);

  return TabGroup;
}(_react2.default.Component);

exports.default = TabGroup;