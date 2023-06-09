import React, { useMemo } from 'react';

/**
 * Renders the times given, and displays them in ascending order.
 *
 * Appends a ⭐️ to the fastest time.
 */
export const Times = (props) => {
  const times = props.times;

  const sortedTimes = useMemo(() => {
    const result = [...times];
    result.sort((aTime, bTime) => aTime.ms - bTime.ms);
    return result;
  }, [times]);

  if (times.length === 0) {
    return <div>No times... yet 👀</div>;
  }

  return (
    <ul class="list-group">
      {sortedTimes.map((time, index) => (
        <li class="list-group-item">
          {time.ms}ms{index === 0 && ' ⭐️'}
          <br />
          <small>
            <em>{time.recordedAt.toString()}</em>
          </small>
        </li>
      ))}
    </ul>
  );
};
