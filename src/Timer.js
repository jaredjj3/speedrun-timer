import React from 'react';

export const Timer = () => {
  return (
    <div>
      <h2>TODO: Current time</h2>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-success">
          start
        </button>
        <button type="button" class="btn btn-danger">
          stop
        </button>
        <button type="button" class="btn btn-warning">
          reset
        </button>
      </div>
    </div>
  );
};
