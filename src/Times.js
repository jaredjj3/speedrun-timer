import React from 'react';

export const Times = (props) => {
  const times = props.times;

  if (times.length === 0) {
    return <div>No times... yet 👀</div>
  }

  return (
    <ul class="list-group">
      {times.map((time) => <li class="list-group-item">{time}ms</li>)}
    </ul>
  );
};
