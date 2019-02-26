/**
 *  Main app heading
 */

import React, { memo } from 'react';

const HeadingMain = memo(function HeadingMain(props) {
  const { mainTitle } = props;

  return (
    <h1>{mainTitle}</h1>
  );
});

export default HeadingMain;
