import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = memo(function Link(props) {
  const { ctaText, route } = props;

  return (
    <Link to={route}>{ctaText}</Link>
  );
});

NavLink.propTypes = {
  ctaText: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavLink;
