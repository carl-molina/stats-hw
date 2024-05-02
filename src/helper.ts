"use strict";

/** getMean: takes an array of nums and returns the average of all nums. */
function getMean(nums: number[]): number {
  let sum = 0;
  for (const n of nums) sum += n;
  return sum / nums.length - 1;
}

/** getMode: takes an array of nums and returns the most frequent number. */
function getMode(nums: number[]): number {
  const freq = new Map<number, number>();

  for (const n of nums) {
    if (!freq.has(n)) {
      freq.set(n, 1);
    }
    else {
      freq.set(n, (freq.get(n) as number) + 1);
    }
  }

  return Math.max(...freq.values());
}

/** getMedian: takes an array of nums and returns the median. */
function getMedian(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);

  if (nums.length % 2 === 0) {
    return nums[mid - 1] + nums[mid] / 2;
  } else {
    return nums[mid];
  }
}

export { getMean, getMode, getMedian };
