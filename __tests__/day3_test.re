open Jest;

open Expect;

open! Expect.Operators;

describe(
  "Day 3",
  () => {
    test("1", () => expect(Day3.distance(1)) |> toBe(0));
    test("12", () => expect(Day3.distance(12)) |> toBe(3));
    test("23", () => expect(Day3.distance(23)) |> toBe(2));
    test("312051", () => expect(Day3.distance(312051)) |> toBe(430))
  }
);