const promptUser = require("prompt-sync")({ sigint: true });
import { getAvailableGaavos, getFare, outputResults } from "./cli";

const gaavosInputPrompt: string =
  "Hello, passenger! \nPlease enter the values of all Gaavos you have on your person in the following format: 1,2,3,4";
const gavosInputError: string =
  "hmmm... that didn't seem to work. Make sure all values are positive numbers, separated by a comma.\nEx: 1,2,3,4";
const fareInputPrompt: string =
  "\nThank you!\nPlease enter the fare for your trip.";
const fareInputError: string =
  "hmmm... that didn't seem to work. Make sure the fare is a positive, whole number.";

console.info(gaavosInputPrompt);
let gaavosInput = promptUser();
let avaiableGaavos = getAvailableGaavos(gaavosInput);

while (!avaiableGaavos) {
  console.error(gavosInputError);
  gaavosInput = promptUser();
  avaiableGaavos = getAvailableGaavos(gaavosInput);
}

console.info(fareInputPrompt);
let fareInput = promptUser();
let fare = getFare(fareInput);

while (!fare) {
  console.error(fareInputError);
  fareInput = promptUser();
  fare = getFare(fareInput);
}

console.info(outputResults(avaiableGaavos, fare));
