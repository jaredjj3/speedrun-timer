import React, { useState } from 'react';

export const Timer = () => {
  const [elapsedTimeMs, setElapsedTimeMs] = useState(0);

  return (
    <div>
      <h2>{elapsedTimeMs} ms</h2>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-success">
          start
        </button>
        <button type="button" className="btn btn-danger">
          stop
        </button>
        <button type="button" className="btn btn-warning">
          reset
        </button>
      </div>
    </div>
  );
};
