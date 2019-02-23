import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Link = memo(function Link(props) {
  const { ctaText, route } = props;

  return (
    <NavLink to={`/${route}`}>{ctaText}</NavLink>
  );
});

export default Link;