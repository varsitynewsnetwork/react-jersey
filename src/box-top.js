import React from 'react'; // eslint-disable-line no-unused-vars

const defaultStyles = {
  backgroundColor: '#f5f6f8',
  padding: '20px',
  textAlign: 'center',
};

export default ({children, ...props}) => {
  const styles = Object.assign(defaultStyles, props);

  return (
    <div style={defaultStyles}>
      {children}
    </div>
  );
};
