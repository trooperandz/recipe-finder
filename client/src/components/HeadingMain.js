/**
 *  Main app heading & search input container
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

const HeadingMain = memo(function HeadingMain({ mainTitle }) {
  return (
    <div className="header">
      <h1 className="header__title">{mainTitle}</h1>
    </div>
  );
});

HeadingMain.propTypes = {
  mainTitle: PropTypes.string.isRequired,
};

export default HeadingMain;
