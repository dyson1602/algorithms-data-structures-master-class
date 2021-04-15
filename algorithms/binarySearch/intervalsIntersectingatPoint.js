// You are given a two-dimensional list of integers intervals and an integer point.
// Each element contains [start, end] represents an inclusive interval.

// Return the number of intervals that are intersecting at point.

const intervalsIntersectingAtPoint = (intervals, point) => {
  return intervals.reduce((count, interval) => {
    if (point >= interval[0] && point <= interval[1]) {
      return count += 1
    } else {
      return count
    }
  }, 0)
}