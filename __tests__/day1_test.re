open Jest;

open Expect;

open! Expect.Operators;

describe(
  "Day 1",
  () => {
    test(
      "1122",
      () => {
        let list = [1, 1, 2, 2];
        expect(Day1.captcha(list)) |> toBe(3)
      }
    );
    test(
      "1111",
      () => {
        let list = [1, 1, 1, 1];
        expect(Day1.captcha(list)) |> toBe(4)
      }
    );
    test(
      "1234",
      () => {
        let list = [1, 2, 3, 4];
        expect(Day1.captcha(list)) |> toBe(0)
      }
    );
    test(
      "91212129",
      () => {
        let list = [9, 1, 2, 1, 2, 1, 2, 9];
        expect(Day1.captcha(list)) |> toBe(9)
      }
    )
  }
);