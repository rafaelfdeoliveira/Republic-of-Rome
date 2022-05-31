export const rollDice = (numberOfDice: number = 1): number => {
    let sum = 0;
    for (let i = 0; i < numberOfDice; i++) {
        sum += 1 + Math.floor(Math.random() * 6);
    }
    return sum;
}

export const getDiceRollFunctionByText = (text: string): () => number {
    switch(text.length) {
        case 7: {
            if (text[4] === '+') return () => rollDice(+text[0]) + +text[6];
            return () => rollDice(+text[0]) - +text[6];
        }
        case 8: {
            if (text[5] === '+') return () => - rollDice(+text[1]) + +text[7];
            return () => - rollDice(+text[1]) - +text[7];
        }
        case 4:
            return () => - rollDice(+text[1]);
        case 3:
            return () => rollDice(+text[0]);
        default:
            throw new Error('Invalid dice roll function text');
    }
}

export const getPositiveValue = (proposedValue: number): number => {
    if (proposedValue < 0) return 0;
    return proposedValue;
}

export const getLimitedPositiveValue = (proposedValue: number, maxAllowedValue: number): number => {
    if (proposedValue < 0) return 0;
    if (proposedValue > maxAllowedValue) return maxAllowedValue;
    return proposedValue;
}