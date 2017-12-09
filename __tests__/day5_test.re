open Jest;

open Expect;

open! Expect.Operators;

describe(
  "Day 5",
  () => {
    test("empty", () => expect(Day5.stepsToExit([||])) |> toBe((-1)));
    test("0", () => expect(Day5.stepsToExit([|0|])) |> toBe(2));
    test("1", () => expect(Day5.stepsToExit([|1|])) |> toBe(1));
    test("0 3 0 1 -3", () => expect(Day5.stepsToExit([|0, 3, 0, 1, (-3)|])) |> toBe(5));
    test("0 2 0 1 -2", () => expect(Day5.stepsToExit([|2, 1, (-2), 1, (-1)|])) |> toBe(6))
  }
);