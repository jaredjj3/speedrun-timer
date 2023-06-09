import React, { useState } from 'react';

export const Timer = (props) => {
  const [elapsedTimeMs, setElapsedTimeMs] = useState(0);
  const onStop = props.onStop;

  const onStartClick = () => {
    console.log('onStartClick');
  };

  const onStopClick = () => {
    console.log('onStopClick');
  };

  const onResetClick = () => {
    console.log('onResetClick');
  };

  return (
    <div>
      <h2>{elapsedTimeMs} ms</h2>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-success"
          onClick={onStartClick}
        >
          start
        </button>
        <button type="button" className="btn btn-danger" onClick={onStopClick}>
          stop
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={onResetClick}
        >
          reset
        </button>
      </div>
    </div>
  );
};
