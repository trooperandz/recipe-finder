/**
 * Render list items
 */

import React, { memo } from 'react';

function renderListItems(items = []) {
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

export default List;