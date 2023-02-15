import findFare from "./findFare";

describe("findFare", () => {
  test("returns the correct fare when it exists", () => {
    const availableGaavos = [1, 2, 3, 4];
    const fare = 10;
    let result = findFare(availableGaavos, fare);

    expect(result).toStrictEqual([1, 2, 3, 4]);
  });

  test("returns an empty array when exact fare can't be met", () => {
    const availableGaavos = [2, 2, 4];
    const fare = 7;

    expect(findFare(availableGaavos, fare)).toStrictEqual([]);
  });

  test("returns an empty array when passenger can't afford the fare", () => {
    const availableGaavos = [2, 2];
    const fare = 7;

    expect(findFare(availableGaavos, fare)).toStrictEqual([]);
  });
});
