"use strict";

import { it, expect, describe } from "vitest";
import { getMean,
   getMedian,
   getMode,
   getRange,
   trimWhitespaceText
} from "./helpers";


describe("getMean", function () {
  it("should return average of all positive integers", function () {
    expect(getMean([1, 2, 3, 4, 5], 5)).toEqual(3);
  });

  it("should return average of all negative integers", function () {
    expect(getMean([-1, -2, -3, -4, -5], 5)).toEqual(-3);
  });

  it("should return average of all positive and negative ints", function () {
      expect(getMean([-1, 2, -3, 4, -5], 5)).toEqual(-0.6);
  });

  it("should return average of all positive floats", function () {
    expect(getMean([1.1, 2.2, 3.3, 4.4, 5.5], 5)).toEqual(3.3);
  });

  it("should return average of all negative floats", function () {
    expect(getMean([-1.1, -2.2, -3.3, -4.4, -5.5], 5)).toEqual(-3.3);
  });

  it("should return average of all positive and negative floats", function () {
      expect(getMean([-1.1, 2.2, -3.3, 4.4, -5.5], 5)).toEqual(-0.66);
  });

  it("should return average of all positive and negative ints and floats", function () {
      expect(getMean([-1, 2.2, -3, 4.4, -5], 5)).toEqual(-0.48);
  });

});


describe("getMedian w/ odd-amount of nums", function () {
  it("should return median of all positive integers", function () {
    expect(getMedian([1, 2, 3, 4, 5])).toEqual(3);
  });

  it("should return median of all negative integers", function () {
    expect(getMedian([-1, -2, -3, -4, -5])).toEqual(-3);
  });

  it("should return median of all positive and negative ints", function () {
      expect(getMedian([-1, 2, -3, 4, -5])).toEqual(-1);
  });

  it("should return median of all positive floats", function () {
    expect(getMedian([1.1, 2.2, 3.3, 4.4, 5.5])).toEqual(3.3);
  });

  it("should return median of all negative floats", function () {
    expect(getMedian([-1.1, -2.2, -3.3, -4.4, -5.5])).toEqual(-3.3);
  });

  it("should return median of all positive and negative floats", function () {
      expect(getMedian([-1.1, 2.2, -3.3, 4.4, -5.5])).toEqual(-1.1);
  });

  it("should return median of all positive and negative ints and floats", function () {
      expect(getMedian([-1, 2.2, -3, 4.4, -5])).toEqual(-1);
  });
});


describe("getMedian w/ even-amount of nums", function () {
  it("should return median of all positive integers", function () {
    expect(getMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5);
  });

  it("should return median of all negative integers", function () {
    expect(getMedian([-1, -2, -3, -4, -5, -6])).toEqual(-3.5);
  });

  it("should return median of all positive and negative ints", function () {
      expect(getMedian([-1, 2, -3, 4, -5, 6])).toEqual(0.5);
  });

  it("should return median of all positive floats", function () {
    expect(getMedian([1.1, 2.2, 3.3, 4.4, 5.5, 6.6])).toEqual(3.85);
  });

  it("should return median of all negative floats", function () {
    expect(getMedian([-1.1, -2.2, -3.3, -4.4, -5.5, -6.6])).toEqual(-3.85);
  });

  it("should return median of all positive and negative floats", function () {
      expect(getMedian([-1.1, 2.2, -3.3, 4.4, -5.5, 6.6])).toEqual(0.55);
  });

  it("should return median of all positive and negative ints and floats", function () {
      expect(getMedian([-1, 2.2, -3, 4.4, -5, 6.6])).toEqual(0.6);
  });
});

