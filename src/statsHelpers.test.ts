// "use strict";

// import { it, expect, describe } from "vitest";
// import { getMean } from "./helpers";
// import { getPopulationStdDev,
//    getSampleStdDev,
//    getPopulationVariance,
//    getSampleVariance
// } from "./statsHelpers";


// describe("getPopulationStdDev", function () {
//   it("should return population standard deviation of all positive integers", function () {
//     expect(getPopulationStdDev([1, 2, 3, 4, 5])).toEqual(1.4142);
//   });

//   it("should return population standard deviation of all negative integers", function () {
//     expect(getPopulationStdDev([-1, -2, -3, -4, -5])).toEqual(1.4142);
//   });

//   it("should return population standard deviation of all positive and negative ints", function () {
//       expect(getPopulationStdDev([-1, 2, -3, 4, -5])).toEqual(2.6077);
//   });

//   it("should return population standard deviation of all positive floats", function () {
//     expect(getPopulationStdDev([1.1, 2.2, 3.3, 4.4, 5.5])).toEqual(1.4142);
//   });

//   it("should return population standard deviation of all negative floats", function () {
//     expect(getPopulationStdDev([-1.1, -2.2, -3.3, -4.4, -5.5])).toEqual(1.4142);
//   });

//   it("should return population standard deviation of all positive and negative floats", function () {
//       expect(getPopulationStdDev([-1.1, 2.2, -3.3, 4.4, -5.5])).toEqual(2.6077);
//   });

//   it("should return population standard deviation of all positive and negative ints and floats", function () {
//       expect(getPopulationStdDev([-1, 2.2, -3, 4.4, -5])).toEqual(2.6077);
//   });
// });