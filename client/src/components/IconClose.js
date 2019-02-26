/**
 * Modal close icon
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

const IconClose = memo(function IconClose({ onClickCloseIcon }) {
  return (
    <div className="icon-close" onClick={onClickCloseIcon}>
      <i className="fas fa-arrow-circle-left"></i>
    </div>
  );
});

IconClose.propTypes = {
  onClickCloseIcon: PropTypes.func.isRequired,
};

export default IconClose;
