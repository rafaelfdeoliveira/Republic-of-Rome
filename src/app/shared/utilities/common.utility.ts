export const rollDice = (numberOfDice: number = 1): number => {
    let sum = 0;
    for (let i = 0; i < numberOfDice; i++) {
        sum += 1 + Math.floor(Math.random() * 6);
    }
    return sum;
}

export const getDiceRollFunctionByText = (text: string): () => number => {
    if (/^[1-9][dD]6 [+] [1-9]$/g.test(text)) return () => rollDice(+text[0]) + +text[6];
    if (/^[1-9][dD]6 - [1-9]$/g.test(text)) return () => rollDice(+text[0]) - +text[6];
    if (/^-[1-9][dD]6 [+] [1-9]$/g.test(text)) return () => - rollDice(+text[1]) + +text[7];
    if (/^-[1-9][dD]6 - [1-9]$/g.test(text)) return () => - rollDice(+text[1]) - +text[7];
    if (/^[1-9][dD]6$/g.test(text)) return () => rollDice(+text[0]);
    if (/^-[1-9][dD]6$/g.test(text)) return () => - rollDice(+text[1]);
    throw new Error(`Invalid dice roll function text: ${text}`);
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