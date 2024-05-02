"use strict";

import { getMean } from "./helpers";

/** getStandardDeviation: takes in list of nums, returns standard deviation. */
function getStandardDeviation(nums: number[]): number {
  const mean = getMean(nums);
  const squaredDiffs = nums.map(n => (n - mean) ** 2);
  const meanSquareDiff = getMean(squaredDiffs);
  // TODO: add formula from stats class to calculate standard deviation
  return Math.sqrt(meanSquareDiff);
}


export { getStandardDeviation };
