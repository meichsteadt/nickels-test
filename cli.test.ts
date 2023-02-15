import { getAvailableGaavos, getFare, outputResults } from "./cli";

describe("getAvailableGaavos", () => {
  test("returns an array of numbers with correct input", () => {
    const result = getAvailableGaavos("1,2,3,4");
    expect(result).toStrictEqual([1, 2, 3, 4]);
  });

  test("returns null with incorrect input", () => {
    const result = getAvailableGaavos("-1");
    expect(result).toStrictEqual(null);
  });
});

describe("getFare", () => {
  test("returns an integer with correct input", () => {
    const result = getFare("1");
    expect(result).toStrictEqual(1);
  });

  test("returns null with incorrect input", () => {
    const result = getFare("-1");
    expect(result).toStrictEqual(null);
  });
});

describe("outputResults", () => {
  test("returns a particular output string when the user has exact fare", () => {
    const avaiableGaavos = [1, 2];
    const fare = 3;
    const result = outputResults(avaiableGaavos, fare);

    const expectedResult = `You can pay for your ${fare}G fare, using pieces: \n${1}G\n${2}G`;
    expect(result).toStrictEqual(expectedResult);
  });

  test("returns a message shaming the user when they have 1 coin that matches fare exactly", () => {
    const avaiableGaavos = [1, 2, 3, 4];
    const fare = 3;
    const result = outputResults(avaiableGaavos, fare);

    const expectedResult = `Just use your ${fare}G piece! We're honestly a little surprised you even used this app at all...`;
    expect(result).toStrictEqual(expectedResult);
  });

  test("returns null with incorrect input", () => {
    const avaiableGaavos = [1, 2, 3, 4];
    const fare = 31;
    const result = outputResults(avaiableGaavos, fare);

    const expectedResult = "Unfortunately, you cannot make the fare :(";
    expect(result).toStrictEqual(expectedResult);
  });
});
