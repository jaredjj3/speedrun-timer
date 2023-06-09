/**
 * Data container for times and when they were recorded at.
 * 
 * NOT A REACT COMPONENT, PLAIN JAVASCRIPT CLASS!
 */
export class Time {
  static record(ms) {
    return new Time(ms, new Date());
  }

  constructor(ms, recordedAt) {
    this.ms = ms;
    this.recordedAt = recordedAt;
  }
}
