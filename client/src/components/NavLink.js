import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const NavLink = memo(function Link(props) {
  const { ctaText, route } = props;

  return (
    <Link to={route}>{ctaText}</Link>
  );
});

export default NavLink;