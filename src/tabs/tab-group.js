import React from 'react';

const containerStyles = {
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const tabStyles = {
  backgroundColor: '#b6bfce',
  borderLeft: '1px solid #b6bfce',
  borderRight: '1px solid #b6bfce',
  borderTop: '4px solid transparent',
  color: '#fff',
  fontSize: '0.85em',
  marginRight: '10px',
  padding: '10px 20px',
};

const activeTabStyles = {
  backgroundColor: '#fff',
  borderTop: '4px solid #2980b9',
  borderLeft: '1px solid #b6bfce',
  borderRight: '1px solid #b6bfce',
  color: '#2c3e50',
  cursor: 'pointer',
};

export default class TabGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 0, hoverIndex: -1};
  }

  setActive = (index) => () => {
    this.setState({active: index});
  };

  onMouseEnter = (index) => () => {
    this.setState({hoverIndex: index});
  };

  onMouseLeave = () => this.setState({hoverIndex: -1});

  render() {
    const {children} = this.props;
    return (
      <div>
        <ul style={containerStyles}>
          {React.Children.map(children, (child, index) => {
            const styles = Object.assign(
              {},
              tabStyles,
              this.state.active === index || this.state.hoverIndex === index ? activeTabStyles : {}
            );
            return (
              <li
                style={styles}
                onClick={this.setActive(index)}
                onMouseEnter={this.onMouseEnter(index)}
                onMouseLeave={this.onMouseLeave}
              >
                {child.props.title}
              </li>
            );
          })}
        </ul>
        {React.Children.map(children, (child, index) => (index === this.state.active ? child : ''))}
      </div>
    );
  }
}
