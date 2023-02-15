"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findFare = (availableGaavos, fare) => {
    if (availableGaavos.includes(fare)) {
        return [fare];
    }
    if (!canAffordFare(availableGaavos, fare)) {
        return [];
    }
    const usableGaavos = availableGaavos.filter((coin) => coin < fare);
    for (let i = 0; i < usableGaavos.length; i++) {
        const gaavo = usableGaavos[i];
        const remainingFare = fare - gaavo;
        const remainingGaavos = usableGaavos.slice(i + 1);
        const nextGaavoCombination = findFare(remainingGaavos, remainingFare);
        if (nextGaavoCombination.length > 0) {
            return Array.prototype.concat(nextGaavoCombination, [gaavo]).sort();
        }
    }
    return [];
};
const canAffordFare = (gaavos, fare) => {
    const gaavosOnHand = gaavos.reduce((partialSum, coin) => partialSum + coin, 0);
    return gaavosOnHand >= fare;
};
exports.default = findFare;
//# sourceMappingURL=findFare.js.map