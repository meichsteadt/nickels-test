"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.outputResults = exports.getFare = exports.getAvailableGaavos = void 0;
const promptUser = require("prompt-sync")({ sigint: true });
const findFare_1 = __importDefault(require("./findFare"));
const stringToNumberArray = (string) => {
    return string.split(",").map((numberString) => {
        const int = parseInt(numberString);
        if (Number.isNaN(int) || int < 0) {
            throw new Error("Incorrect input format");
        }
        return int;
    });
};
const getFareCombinationAsString = (fareCombo) => {
    return fareCombo.reduce((partialString, number) => partialString + `\n${number}G`, "");
};
const getAvailableGaavos = (userInput) => {
    try {
        return stringToNumberArray(userInput);
    }
    catch (_a) {
        return null;
    }
};
exports.getAvailableGaavos = getAvailableGaavos;
const getFare = (userInput) => {
    const fare = parseInt(userInput);
    if (Number.isNaN(fare) || fare < 0) {
        return null;
    }
    return fare;
};
exports.getFare = getFare;
const outputResults = (avaiableGaavos, fare) => {
    const fareCombo = (0, findFare_1.default)(avaiableGaavos, fare);
    if (fareCombo.length === 1) {
        return `Just use your ${fare}G piece! We're honestly a little surprised you even used this app at all...`;
    }
    else if (fareCombo.length > 0) {
        const fareComboString = getFareCombinationAsString(fareCombo);
        return `You can pay for your ${fare}G fare, using pieces: ${fareComboString}`;
    }
    else {
        return "Unfortunately, you cannot make the fare :(";
    }
};
exports.outputResults = outputResults;
//# sourceMappingURL=cli.js.map