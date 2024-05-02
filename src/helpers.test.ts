"use strict";

import { it, expect, describe } from "vitest";
import { getMean,
   getMedian,
   getMode,
   getRange,
   trimWhitespaceText
} from "./helpers";


const allPositiveInts = [1, 2, 3, 4, 5];
const allNegativeInts = [-1, -2, -3, -4, -5];
const positiveAndNegativeInts = [-1, 2, -3, 4, -5];
const allPositiveFloats = [1.1, 2.2, 3.3, 4.4, 5.5];
const allNegativeFloats = [-1.1, -2.2, -3.3, -4.4, -5.5];
const positiveAndNegativeFloats = [-1.1, 2.2, -3.3, 4.4, -5.5];
const positiveAndNegativeIntsAndFloats = [-1, 2.2, -3, 4.4, -5];


describe("getMean", function () {
  it("should return average of all positive integers", function () {
    expect(getMean(allPositiveInts, allPositiveInts.length)).toEqual(3);
  });

  it("should return average of all negative integers", function () {
    expect(getMean(allNegativeInts, allNegativeInts.length)).toEqual(-3);
  });

  it("should return average of all positive and negative ints", function () {
      expect(getMean(positiveAndNegativeInts, positiveAndNegativeInts.length)).toEqual(-0.6);
  });

  it("should return average of all positive floats", function () {
    expect(getMean(allPositiveFloats, allPositiveFloats.length)).toEqual(3.3);
  });

  it("should return average of all negative floats", function () {
    expect(getMean(allNegativeFloats, allNegativeFloats.length)).toEqual(-3.3);
  });

  it("should return average of all positive and negative floats", function () {
      expect(getMean(positiveAndNegativeFloats, positiveAndNegativeFloats.length)).toEqual(-0.66);
  });

  it("should return average of all positive and negative ints and floats", function () {
      expect(getMean(positiveAndNegativeIntsAndFloats, positiveAndNegativeIntsAndFloats.length)).toEqual(-0.48);
  });

});


describe("getMedian w/ odd-amount of nums", function () {
  it("should return median of all positive integers", function () {
    expect(getMedian(allPositiveInts)).toEqual(3);
  });

  it("should return median of all negative integers", function () {
    expect(getMedian(allNegativeInts)).toEqual(-3);
  });

  it("should return median of all positive and negative ints", function () {
      expect(getMedian(positiveAndNegativeInts)).toEqual(-1);
  });

  it("should return median of all positive floats", function () {
    expect(getMedian(allPositiveFloats)).toEqual(3.3);
  });

  it("should return median of all negative floats", function () {
    expect(getMedian(allNegativeFloats)).toEqual(-3.3);
  });

  it("should return median of all positive and negative floats", function () {
      expect(getMedian(positiveAndNegativeFloats)).toEqual(-1.1);
  });

  it("should return median of all positive and negative ints and floats", function () {
      expect(getMedian(positiveAndNegativeIntsAndFloats)).toEqual(-1);
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


describe("getMode w/ a mode in array", function () {
  it("should return mode of all positive integers", function () {
    expect(getMode([1, 2, 3, 4, 5, 5])).toEqual([5]);
  });

  it("should return mode of all negative integers", function () {
    expect(getMode([-1, -2, -3, -4, -5, -5])).toEqual([-5]);
  });

  it("should return mode of all positive and negative ints", function () {
      expect(getMode([-1, 2, -3, 4, -5, -5])).toEqual([-5]);
  });

  it("should return mode of all positive floats", function () {
    expect(getMode([1.1, 2.2, 3.3, 4.4, 5.5, 5.5])).toEqual([5.5]);
  });

  it("should return mode of all negative floats", function () {
    expect(getMode([-1.1, -2.2, -3.3, -4.4, -5.5, -5.5])).toEqual([-5.5]);
  });

  it("should return mode of all positive and negative floats", function () {
      expect(getMode([-1.1, 2.2, -3.3, 4.4, -5.5, -5.5])).toEqual([-5.5]);
  });

  it("should return mode of all positive and negative ints and floats", function () {
      expect(getMode([-1, 2.2, -3, 4.4, -5, -5])).toEqual([-5]);
  });
});


describe("getMode w/out a mode in array", function () {
  it("should return no mode w/ all positive integers", function () {
    expect(getMode(allPositiveInts)).toEqual("The data set has no mode.");
  });

  it("should return mo mode w/ all negative integers", function () {
    expect(getMode(allNegativeInts)).toEqual("The data set has no mode.");
  });

  it("should return no mode w/ all positive and negative ints", function () {
      expect(getMode(positiveAndNegativeInts)).toEqual("The data set has no mode.");
  });

  it("should return no mode w/ all positive floats", function () {
    expect(getMode(allPositiveFloats)).toEqual("The data set has no mode.");
  });

  it("should return no mode w/ all negative floats", function () {
    expect(getMode(allNegativeFloats)).toEqual("The data set has no mode.");
  });

  it("should return no mode w/ all positive and negative floats", function () {
      expect(getMode(positiveAndNegativeFloats)).toEqual("The data set has no mode.");
  });

  it("should return no mode w/ all positive and negative ints and floats", function () {
      expect(getMode(positiveAndNegativeIntsAndFloats)).toEqual("The data set has no mode.");
  });
});


describe("getMode w/ multiple modes in array", function () {
  it("should return bimodal modes w/ all positive integers", function () {
    expect(getMode([1, 1, 2, 3, 4, 5, 5])).toEqual([1, 5]);
  });
  it("should return trimodal modes w/ all positive integers", function () {
    expect(getMode([1, 1, 2, 3, 4, 4, 5, 5])).toEqual([1, 4, 5]);
  });
  it("should return multimodal modes w/ all positive integers", function () {
    expect(getMode([1, 1, 2, 2, 3, 4, 4, 5, 5])).toEqual([1, 2, 4, 5]);
  });
});


describe("getRange", function () {
  it("should return range of all positive integers", function () {
    expect(getRange(allPositiveInts)).toEqual(4);
  });

  it("should return range of all negative integers", function () {
    expect(getRange(allNegativeInts)).toEqual(4);
  });

  it("should return range of all positive and negative ints", function () {
      expect(getRange(positiveAndNegativeInts)).toEqual(9);
  });

  it("should return range of all positive floats", function () {
    expect(getRange(allPositiveFloats)).toEqual(4.4);
  });

  it("should return range of all negative floats", function () {
    expect(getRange(allNegativeFloats)).toEqual(4.4);
  });

  it("should return range of all positive and negative floats", function () {
      expect(getRange(positiveAndNegativeFloats)).toEqual(9.9);
  });

  it("should return range of all positive and negative ints and floats", function () {
      expect(getRange(positiveAndNegativeIntsAndFloats)).toEqual(9.4);
  });
});


describe("trimWhitespaceText", function () {
  it("should return array of numbers w/ whitespaces removed", function () {
    expect(trimWhitespaceText("1 2 3 4 5")).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return array of numbers w/ whitespaces removed", function () {
    expect(trimWhitespaceText("1.1 2.2 3.3 4.4 5.5")).toEqual([1.1, 2.2, 3.3, 4.4, 5.5]);
  });

  it("should return array of numbers w/ whitespaces removed", function () {
    expect(trimWhitespaceText("-1 -2 -3 -4 -5")).toEqual([-1, -2, -3, -4, -5]);
  });

  it("should return array of numbers w/ whitespaces removed", function () {
    expect(trimWhitespaceText("-1.1 -2.2 -3.3 -4.4 -5.5")).toEqual([-1.1, -2.2, -3.3, -4.4, -5.5]);
  });

  it("should return array of numbers w/ whitespaces removed", function () {
    expect(trimWhitespaceText("-1 2 -3 4 -5")).toEqual([-1, 2, -3, 4, -5]);
  });

  it("should return array of numbers w/ whitespaces removed", function () {
    expect(trimWhitespaceText("-1.1 2.2 -3.3 4.4 -5.5")).toEqual([-1.1, 2.2, -3.3, 4.4, -5.5]);
  });

  it("should return array of numbers w/ whitespaces removed", function () {
    expect(trimWhitespaceText("-1 2.2 -3 4.4 -5")).toEqual([-1, 2.2, -3, 4.4, -5]);
  });

  it("should return array of numbers w/ whitespaces removed", function () {
    expect(trimWhitespaceText("-1.1 2 -3 4.4 -5")).toEqual([-1.1, 2, -3, 4.4, -5]);
  });
});


describe("trimWhitespaceText w/ extra whitespaces", function () {
  it("should return array of numbers w/ whitespaces removed", function () {
    expect(trimWhitespaceText("  1  2  3  4  5  ")).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("trimWhitespaceText w/ invalid non-number input", function () {
  it("should return array of numbers w/ whitespaces and non-numbers removed", function () {
    expect(trimWhitespaceText("1 a 2 b 3 4 5 c")).toEqual([1, 2, 3, 4, 5]);
    expect(trimWhitespaceText("1 2a 3 4b 5")).toEqual([1, 3, 5]);
  });
});