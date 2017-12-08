// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Jest                  = require("bs-jest/src/jest.js");
var Day2$ReasonAdvent2017 = require("../src/day2.bs.js");

describe("Day 2", (function () {
        Jest.test("example", (function () {
                return Jest.Expect[/* toBe */2](18)(Jest.Expect[/* expect */0](Day2$ReasonAdvent2017.checksum(/* :: */[
                                    /* :: */[
                                      5,
                                      /* :: */[
                                        1,
                                        /* :: */[
                                          9,
                                          /* :: */[
                                            5,
                                            /* [] */0
                                          ]
                                        ]
                                      ]
                                    ],
                                    /* :: */[
                                      /* :: */[
                                        7,
                                        /* :: */[
                                          5,
                                          /* :: */[
                                            3,
                                            /* [] */0
                                          ]
                                        ]
                                      ],
                                      /* :: */[
                                        /* :: */[
                                          2,
                                          /* :: */[
                                            4,
                                            /* :: */[
                                              6,
                                              /* :: */[
                                                8,
                                                /* [] */0
                                              ]
                                            ]
                                          ]
                                        ],
                                        /* [] */0
                                      ]
                                    ]
                                  ])));
              }));
        Jest.test("simple", (function () {
                return Jest.Expect[/* toBe */2](17)(Jest.Expect[/* expect */0](Day2$ReasonAdvent2017.checksum(/* :: */[
                                    /* :: */[
                                      5,
                                      /* :: */[
                                        3,
                                        /* :: */[
                                          9,
                                          /* :: */[
                                            5,
                                            /* :: */[
                                              20,
                                              /* [] */0
                                            ]
                                          ]
                                        ]
                                      ]
                                    ],
                                    /* [] */0
                                  ])));
              }));
        Jest.test("empty", (function () {
                return Jest.Expect[/* toBe */2](0)(Jest.Expect[/* expect */0](Day2$ReasonAdvent2017.checksum(/* [] */0)));
              }));
        return Jest.test("nested empty", (function () {
                      return Jest.Expect[/* toBe */2](0)(Jest.Expect[/* expect */0](Day2$ReasonAdvent2017.checksum(/* :: */[
                                          /* [] */0,
                                          /* :: */[
                                            /* [] */0,
                                            /* [] */0
                                          ]
                                        ])));
                    }));
      }));

/*  Not a pure module */
