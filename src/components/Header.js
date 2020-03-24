import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
  return(
    <h2 align="center" className='Header text-center'>
      {message}
    </h2>
  );
};
  
Header.propTypes = {
  // eslint-disable-next-line react/no-deprecated
  message: PropTypes.string
};

export default Header;