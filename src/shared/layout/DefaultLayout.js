import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.any
};

export default DefaultLayout;
