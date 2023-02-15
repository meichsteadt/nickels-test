const findFare = (availableGaavos: Array<number>, fare: number) => {
  if (availableGaavos.includes(fare)) {
    return [fare];
  }
  if (!canAffordFare(availableGaavos, fare)) {
    return [];
  }

  const usableGaavos: Array<number> = availableGaavos.filter(
    (coin: number) => coin < fare
  );

  for (let i = 0; i < usableGaavos.length; i++) {
    const gaavo: number = usableGaavos[i];
    const remainingFare: number = fare - gaavo;
    const remainingGaavos: Array<number> = usableGaavos.slice(i + 1);
    const nextGaavoCombination: Array<number> = findFare(
      remainingGaavos,
      remainingFare
    );

    if (nextGaavoCombination.length > 0) {
      return Array.prototype.concat(nextGaavoCombination, [gaavo]).sort();
    }
  }

  return [];
};

const canAffordFare = (gaavos: Array<number>, fare: number): boolean => {
  const gaavosOnHand = gaavos.reduce(
    (partialSum, coin) => partialSum + coin,
    0
  );
  return gaavosOnHand >= fare;
};

export default findFare;
