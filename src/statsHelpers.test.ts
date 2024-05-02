"use strict";

import { it, expect, describe } from "vitest";
import { getMean } from "./helpers";
import {
  getPopulationStdDev,
  getSampleStdDev,
  getPopulationSampleVariance,
} from "./statsHelpers";


describe("getPopulationStdDev", function () {
  it("should return population standard deviation of all positive integers", function () {
    expect(getPopulationStdDev([1, 2, 3, 4, 5])).toEqual(1.4142135624);
  });

  it("should return population standard deviation of all negative integers", function () {
    expect(getPopulationStdDev([-1, -2, -3, -4, -5])).toEqual(1.4142135624);
  });

  it("should return population standard deviation of all positive and negative ints", function () {
    expect(getPopulationStdDev([-1, 2, -3, 4, -5])).toEqual(3.2619012861);
  });

  it("should return population standard deviation of all positive floats", function () {
    expect(getPopulationStdDev([1.1, 2.2, 3.3, 4.4, 5.5])).toEqual(1.5556349186);
  });

  it("should return population standard deviation of all negative floats", function () {
    expect(getPopulationStdDev([-1.1, -2.2, -3.3, -4.4, -5.5])).toEqual(1.5556349186);
  });

  it("should return population standard deviation of all positive and negative floats", function () {
    expect(getPopulationStdDev([-1.1, 2.2, -3.3, 4.4, -5.5])).toEqual(3.5880914147);
  });

  it("should return population standard deviation of all positive and negative ints and floats", function () {
    expect(getPopulationStdDev([-1, 2.2, -3, 4.4, -5])).toEqual(3.4072863102);
  });
});

describe("getSampleStdDev", function () {
  it("should return sample standard deviation of all positive integers", function () {
    expect(getSampleStdDev([1, 2, 3, 4, 5])).toEqual(1.5811388301);
  });

  it("should return sample standard deviation of all negative integers", function () {
    expect(getSampleStdDev([-1, -2, -3, -4, -5])).toEqual(1.5811388301);
  });

  it("should return sample standard deviation of all positive and negative ints", function () {
    expect(getSampleStdDev([-1, 2, -3, 4, -5])).toEqual(3.6469165058);
  });

  it("should return sample standard deviation of all positive floats", function () {
    expect(getSampleStdDev([1.1, 2.2, 3.3, 4.4, 5.5])).toEqual(1.7392527131);
  });

  it("should return sample standard deviation of all negative floats", function () {
    expect(getSampleStdDev([-1.1, -2.2, -3.3, -4.4, -5.5])).toEqual(1.7392527131);
  });

  it("should return sample standard deviation of all positive and negative floats", function () {
    expect(getSampleStdDev([-1.1, 2.2, -3.3, 4.4, -5.5])).toEqual(4.0116081563);
  });

  it("should return sample standard deviation of all positive and negative ints and floats", function () {
    expect(getSampleStdDev([-1, 2.2, -3, 4.4, -5])).toEqual(3.8094619043);
  });
});

describe("getPopulationVariance", function () {
  it("should return correct population variance from std dev", function () {
    expect(getPopulationSampleVariance(1.4142135624)).toEqual(2.0000000001);
    expect(getPopulationSampleVariance(3.2619012861)).toEqual(10.6400000003);
  });
});
