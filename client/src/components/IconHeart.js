/**
 * Modal heart icon
 */

import React, { memo } from 'react';

const IconHeart = memo(function IconHeart({ onClickHeartIcon }) {
  return (
    <div className="icon-heart" onClick={onClickHeartIcon}>
      <i className="far fa-heart"></i>
    </div>
  );
});

export default IconHeart;
