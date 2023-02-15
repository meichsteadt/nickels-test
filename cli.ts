const promptUser = require("prompt-sync")({ sigint: true });
import findFare from "./findFare";

const stringToNumberArray = (string: string): Array<number> => {
  return string.split(",").map((numberString) => {
    const int = parseInt(numberString);

    if (Number.isNaN(int) || int < 0) {
      throw new Error("Incorrect input format");
    }

    return int;
  });
};

const getFareCombinationAsString = (fareCombo: Array<number>): string => {
  return fareCombo.reduce(
    (partialString, number) => partialString + `\n${number}G`,
    ""
  );
};

const getAvailableGaavos = (userInput: string): Array<number> => {
  try {
    return stringToNumberArray(userInput);
  } catch {
    return null;
  }
};

const getFare = (userInput: string): number => {
  const fare = parseInt(userInput);

  if (Number.isNaN(fare) || fare < 0) {
    return null;
  }

  return fare;
};

const outputResults = (avaiableGaavos: Array<number>, fare: number): string => {
  const fareCombo = findFare(avaiableGaavos, fare);

  if (fareCombo.length === 1) {
    return `Just use your ${fare}G piece! We're honestly a little surprised you even used this app at all...`;
  } else if (fareCombo.length > 0) {
    const fareComboString: string = getFareCombinationAsString(fareCombo);

    return `You can pay for your ${fare}G fare, using pieces: ${fareComboString}`;
  } else {
    return "Unfortunately, you cannot make the fare :(";
  }
};

export { getAvailableGaavos, getFare, outputResults };
