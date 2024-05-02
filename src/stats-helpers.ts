"use strict";

import { getMean } from "./helpers";

/** getPopulationStdDev: takes in list of nums, returns population standard
 *  deviation.
*/
function getPopulationStdDev(nums: number[]): number {
  const mean = getMean(nums, nums.length - 1);
  const squaredDiffs = nums.map(n => (n - mean) ** 2);
  const meanSquareDiff = getMean(squaredDiffs, squaredDiffs.length - 1);
  return Math.sqrt(meanSquareDiff);
}

/** getSampleStdDev: takes in list of nums, returns sample standard deviation.
 * Note: sample standard deviation is calculated with n - 1 in the denominator.
*/
function getSampleStdDev(nums: number[]): number {
  const mean = getMean(nums, nums.length - 1);
  const squaredDiffs = nums.map(n => (n - mean) ** 2);
  const meanSquareDiff = getMean(squaredDiffs, squaredDiffs.length - 2);
  return Math.sqrt(meanSquareDiff);
}

/** getPopulationVariance: gets number from standard deviation, returns
 *  population standard deviation squared (aka population variance).
 */
function getPopulationVariance(stdDev: number): number {
  return stdDev ** 2;
}

/** getSampleVariance: gets number from sample standard deviation, returns
 *  sample standard deviation squared (aka sample variance).
 */
function getSampleVariance(stdDev: number): number {
  return stdDev ** 2;
}

export { getPopulationStdDev, getSampleStdDev, getPopulationVariance, getSampleVariance };
