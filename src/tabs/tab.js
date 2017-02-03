import React from 'react'; // eslint-disable-line no-unused-vars

const defaultStyles = {
    backgroundColor: '#fff',
    border: '1px solid #b6bfce',
    marginTop: '-1px',
    padding: '20px',
};

export default ({children}) => <div style={defaultStyles}>
  {children}
</div>;
