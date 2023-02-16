"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("./cli");
describe("getAvailableGaavos", () => {
    test("returns an array of numbers with correct input", () => {
        const result = (0, cli_1.getAvailableGaavos)("1,2,3,4");
        expect(result).toStrictEqual([1, 2, 3, 4]);
    });
    test("returns null with incorrect input", () => {
        const result = (0, cli_1.getAvailableGaavos)("-1");
        expect(result).toStrictEqual(null);
    });
});
describe("getFare", () => {
    test("returns an integer with correct input", () => {
        const result = (0, cli_1.getFare)("1");
        expect(result).toStrictEqual(1);
    });
    test("returns null with incorrect input", () => {
        const result = (0, cli_1.getFare)("-1");
        expect(result).toStrictEqual(null);
    });
});
describe("outputResults", () => {
    test("returns a particular output string when the user has exact fare", () => {
        const avaiableGaavos = [1, 2];
        const fare = 3;
        const expectedResult = `You can pay for your ${fare}G fare, using pieces: \n${1}G\n${2}G`;
        const result = (0, cli_1.outputResults)(avaiableGaavos, fare);
        expect(result).toStrictEqual(expectedResult);
    });
    test("returns a message shaming the user when they have 1 coin that matches fare exactly", () => {
        const avaiableGaavos = [1, 2, 3, 4];
        const fare = 3;
        const expectedResult = `Just use your ${fare}G piece! We're honestly a little surprised you even used this app at all...`;
        const result = (0, cli_1.outputResults)(avaiableGaavos, fare);
        expect(result).toStrictEqual(expectedResult);
    });
    test("returns null with incorrect input", () => {
        const avaiableGaavos = [1, 2, 3, 4];
        const fare = 31;
        const expectedResult = "Unfortunately, you cannot make the fare :(";
        const result = (0, cli_1.outputResults)(avaiableGaavos, fare);
        expect(result).toStrictEqual(expectedResult);
    });
});
//# sourceMappingURL=cli.test.js.map