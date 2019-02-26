/**
 *  Main app hero container
 */

import React, { Fragment, memo } from 'react';

const HeroImage = memo(function HeroImage(props) {
  return (
    <Fragment>
      <div className="hero-image"></div>
    </Fragment>
  );
});

export default HeroImage;
