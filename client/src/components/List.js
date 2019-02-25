/**
 * Render list items
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

const renderListItems = (items = []) => {
  return items.map((item, i) => <li key={i}>{item}</li>);
}

const List = memo(function List(props) {
  const { listItems } = props;

  return (
    <ul>
      {renderListItems(listItems)}
    </ul>
  );
});

List.propTypes = {
  listItems: PropTypes.array.isRequired,
};

export default List;
