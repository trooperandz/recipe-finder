/**
 * Render list items
 */

import React, { memo } from 'react';

function renderListItems(items) {
  return items.map((item) => <li>item</li>);
}

const List = memo(function List(props) {
  const { listItems } = props;

  <ul>
    {renderListItems(listItems)}
  </ul>
});

export default List;