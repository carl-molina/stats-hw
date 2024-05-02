"use strict";

import { getMean } from "./helpers";


/** getPopulationStdDev: takes in list of nums, returns population standard
 *  deviation.
*/
function getPopulationStdDev(nums: number[]): number {
  const mean = getMean(nums, nums.length);
  const squaredDiffs = nums.map(n => (n - mean) ** 2);
  const meanSquareDiff = getMean(squaredDiffs, squaredDiffs.length);
  return Number(Math.sqrt(meanSquareDiff).toFixed(10));
}


/** getSampleStdDev: takes in list of nums, returns sample standard deviation.
 * Note: sample standard deviation is calculated with n - 1 in the denominator.
*/
function getSampleStdDev(nums: number[]): number {
  const mean = getMean(nums, nums.length);
  const squaredDiffs = nums.map(n => (n - mean) ** 2);
  const meanSquareDiff = getMean(squaredDiffs, squaredDiffs.length - 1);
  return Number(Math.sqrt(meanSquareDiff).toFixed(10));
}


/** getPopulationVariance: gets number from standard deviation, returns
 *  population standard deviation squared (aka population variance).
 */
function getPopulationSampleVariance(stdDev: number): number {
  return Number((stdDev ** 2).toFixed(10));
}


/** getSampleVariance: gets number from sample standard deviation, returns
 *  sample standard deviation squared (aka sample variance).
 */
// function getSampleVariance(stdDev: number): number {
//   return stdDev ** 2;
// }
// ^ Potentially not necessary since population variance is same formula.


export {
  getPopulationStdDev,
  getSampleStdDev,
  getPopulationSampleVariance,
};
