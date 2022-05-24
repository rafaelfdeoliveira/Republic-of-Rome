export class Event {

    public intensity: number = 1;

    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly normalTexts: string[],
        public readonly harshTexts: string[]
    ) {}
}