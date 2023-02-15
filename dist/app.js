"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptUser = require("prompt-sync")({ sigint: true });
const cli_1 = require("./cli");
const gaavosInputPrompt = "Hello, passenger! \nPlease enter the values of all Gaavos you have on your person in the following format: 1,2,3,4";
const gavosInputError = "hmmm... that didn't seem to work. Make sure all values are positive numbers, separated by a comma.\nEx: 1,2,3,4";
const fareInputPrompt = "\nThank you!\nPlease enter the fare for your trip.";
const fareInputError = "hmmm... that didn't seem to work. Make sure the fare is a positive, whole number.";
console.log(gaavosInputPrompt);
let gaavosInput = promptUser();
let avaiableGaavos = (0, cli_1.getAvailableGaavos)(gaavosInput);
while (!avaiableGaavos) {
    console.log(gavosInputError);
    gaavosInput = promptUser();
    avaiableGaavos = (0, cli_1.getAvailableGaavos)(gaavosInput);
}
console.log(fareInputPrompt);
let fareInput = promptUser();
let fare = (0, cli_1.getFare)(fareInput);
while (!fare) {
    console.log(fareInputError);
    fareInput = promptUser();
    fare = (0, cli_1.getFare)(fareInput);
}
console.log((0, cli_1.outputResults)(avaiableGaavos, fare));
//# sourceMappingURL=app.js.map