"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findFare_1 = __importDefault(require("./findFare"));
describe("findFare", () => {
    test("returns the correct fare when it exists", () => {
        const availableGaavos = [1, 2, 3, 4];
        const fare = 10;
        let result = (0, findFare_1.default)(availableGaavos, fare);
        expect(result).toStrictEqual([1, 2, 3, 4]);
    });
    test("returns an empty array when exact fare can't be met", () => {
        const availableGaavos = [2, 2, 4];
        const fare = 7;
        expect((0, findFare_1.default)(availableGaavos, fare)).toStrictEqual([]);
    });
    test("returns an empty array when passenger can't afford the fare", () => {
        const availableGaavos = [2, 2];
        const fare = 7;
        expect((0, findFare_1.default)(availableGaavos, fare)).toStrictEqual([]);
    });
});
//# sourceMappingURL=findFare.test.js.map