import React from 'react'; // eslint-disable-line no-unused-vars

const defaultStyles = {
  backgroundColor: '#fff',
  borderTop: '4px solid #2c3e50',
  borderRadius: '5px',
  padding: '10px',
};

export default ({children, ...props}) => {
  const styles = Object.assign(defaultStyles, props);

  return (
    <div style={defaultStyles}>
      {children}
    </div>
  );
};
