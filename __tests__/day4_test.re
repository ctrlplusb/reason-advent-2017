open Jest;

open Expect;

open! Expect.Operators;

describe(
  "Day 4",
  () => {
    test("aa bb cc dd ee", () => expect(Day4.isValidPassphrase("aa bb cc dd ee")) |> toBe(true));
    test("aa bb cc dd aa", () => expect(Day4.isValidPassphrase("aa bb cc dd aa")) |> toBe(false));
    test("aa bb cc dd aaa", () => expect(Day4.isValidPassphrase("aa bb cc dd aaa")) |> toBe(true))
  }
);