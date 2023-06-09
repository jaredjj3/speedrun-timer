export class Time {
  static record(ms) {
    return new Time(ms, new Date());
  }

  constructor(ms, recordedAt) {
    this.ms = ms;
    this.recordedAt = recordedAt;
  }
}
