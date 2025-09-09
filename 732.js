class MyCalendarThree {
  constructor() {
    this.keys = [];
    this.delta = new Map();
    this.peak = 0;
  }

  book(start, end) {
    this.#addPoint(start, +1);
    this.#addPoint(end, -1);
    let run = 0, best = 0;
    for (const t of this.keys) {
      run += this.delta.get(t);
      if (run > best) best = run;
    }
    this.peak = best;
    return this.peak;
  }

  #addPoint(time, val) {
    if (this.delta.has(time)) {
      this.delta.set(time, this.delta.get(time) + val);
      return;
    }
    const idx = this.#lowerBound(this.keys, time);
    this.keys.splice(idx, 0, time);
    this.delta.set(time, val);
  }

  #lowerBound(arr, x) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }
}

const cal = new MyCalendarThree();
console.log(cal.book(10, 20));
console.log(cal.book(50, 60));
console.log(cal.book(10, 40));
console.log(cal.book(5, 15));
console.log(cal.book(5, 10));
console.log(cal.book(25, 55));
