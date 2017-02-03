import React from 'react'; // eslint-disable-line no-unused-vars

const avatarService = (size, uniqid) =>
  `url(https://api.adorable.io/avatars/${size}/${encodeURIComponent(uniqid)})`;

const defaultStyles = {
  borderRadius: '50%',
  height: '90px',
  width: '90px',
};

export default ({size = '90', url = '', uniqid = 'hello', ...props}) => {
  const backgroundImage = url || avatarService(size, uniqid);
  const styles = Object.assign(defaultStyles, props, {
    backgroundImage,
    width: `${size}px`,
    height: `${size}px`,
  });

  return (
    <div style={defaultStyles} />
  );
};
