// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Jest                  = require("bs-jest/src/jest.js");
var Day5$ReasonAdvent2017 = require("../src/day5.bs.js");

describe("Day 5", (function () {
        Jest.test("empty", (function () {
                return Jest.Expect[/* toBe */2](-1)(Jest.Expect[/* expect */0](Day5$ReasonAdvent2017.stepsToExit(/* int array */[])));
              }));
        Jest.test("0", (function () {
                return Jest.Expect[/* toBe */2](2)(Jest.Expect[/* expect */0](Day5$ReasonAdvent2017.stepsToExit(/* int array */[0])));
              }));
        Jest.test("1", (function () {
                return Jest.Expect[/* toBe */2](1)(Jest.Expect[/* expect */0](Day5$ReasonAdvent2017.stepsToExit(/* int array */[1])));
              }));
        Jest.test("0 3 0 1 -3", (function () {
                return Jest.Expect[/* toBe */2](5)(Jest.Expect[/* expect */0](Day5$ReasonAdvent2017.stepsToExit(/* array */[
                                    0,
                                    3,
                                    0,
                                    1,
                                    -3
                                  ])));
              }));
        return Jest.test("0 2 0 1 -2", (function () {
                      return Jest.Expect[/* toBe */2](6)(Jest.Expect[/* expect */0](Day5$ReasonAdvent2017.stepsToExit(/* array */[
                                          2,
                                          1,
                                          -2,
                                          1,
                                          -1
                                        ])));
                    }));
      }));

/*  Not a pure module */