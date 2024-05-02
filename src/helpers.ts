"use strict";


/** getMean: takes an array of nums and returns the average of all nums. */
function getMean(nums: number[], lengthOfNums: number): number {
  let sum = 0;
  for (const n of nums) sum += n;
  return Number((sum / lengthOfNums).toFixed(4));
}


/** getMedian: takes an array of nums and returns the median. */
function getMedian(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);

  if (nums.length % 2 === 0) {
    return Number(((nums[mid - 1] + nums[mid]) / 2).toFixed(4));
  } else {
    return nums[mid];
  }
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


/** getRange: takes an array of nums and returns the range. */
function getRange(nums: number[]): number {
  return Math.max(...nums) - Math.min(...nums);
}


/** trimWhitespaceText: takes in a single string of numbers with spaces (e.g. a
 * textarea box) and returns an array of numbers with whitespaces removed.
 */
function trimWhitespaceText(text: string): number[] {
  return text.split(' ').map(n => Number(n));
}


export { getMean, getMode, getMedian, getRange, trimWhitespaceText };
