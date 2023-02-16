"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findFare_1 = require("./findFare");
describe("findFare", () => {
    test("returns the correct fare when it exists", () => {
        const availableGaavos = [6, 13, 13, 21, 23, 24];
        const fare = 57;
        let result = (0, findFare_1.findFare)(availableGaavos, fare);
        expect(result).toStrictEqual([13, 21, 23]);
    });
    test("returns an empty array when exact fare can't be met", () => {
        const availableGaavos = [1, 4, 6];
        const fare = 8;
        const result = (0, findFare_1.findFare)(availableGaavos, fare);
        expect(result).toStrictEqual([]);
    });
    test("returns an empty array when passenger can't afford the fare", () => {
        const availableGaavos = [2, 2];
        const fare = 7;
        const result = (0, findFare_1.findFare)(availableGaavos, fare);
        expect(result).toStrictEqual([]);
    });
});
//# sourceMappingURL=findFare.test.js.map