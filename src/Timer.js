import React, { useState, useEffect } from 'react';
import { Time } from './Time';

// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
const raf = window.requestAnimationFrame;

// https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame
const caf = window.cancelAnimationFrame;

/**
 * Keeps track of the current time keeping.
 */
export const Timer = (props) => {
  const onStop = props.onStop;

  const [elapsedTimeMs, setElapsedTimeMs] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) {
      return;
    }

    const startMs = Date.now();

    let rafHandle = 0;

    const updateTime = () => {
      const endMs = Date.now();
      setElapsedTimeMs(endMs - startMs);
      rafHandle = raf(updateTime);
    };

    updateTime();
    
    return () => {
      caf(rafHandle);
    };
  }, [running]);

  const onStartClick = () => {
    setRunning(true);
  };

  const onStopClick = () => {
    setRunning(false);
    onStop(Time.record(elapsedTimeMs));
    setElapsedTimeMs(0);
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
      </div>
    </div>
  );
};
