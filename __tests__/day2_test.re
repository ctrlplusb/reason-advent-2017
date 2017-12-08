open Jest;

open Expect;

open! Expect.Operators;

describe(
  "Day 2",
  () => {
    test(
      "example",
      () => {
        let spreadsheet = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];
        expect(Day2.checksum(spreadsheet)) |> toBe(18)
      }
    );
    test(
      "simple",
      () => {
        let spreadsheet = [[5, 3, 9, 5, 20]];
        expect(Day2.checksum(spreadsheet)) |> toBe(17)
      }
    );
    test(
      "empty",
      () => {
        let spreadsheet = [];
        expect(Day2.checksum(spreadsheet)) |> toBe(0)
      }
    );
    test(
      "nested empty",
      () => {
        let spreadsheet = [[], []];
        expect(Day2.checksum(spreadsheet)) |> toBe(0)
      }
    )
  }
);