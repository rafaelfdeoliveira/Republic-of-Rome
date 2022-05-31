export class EventCard {

    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly normalTexts: string[],
        public readonly harshTexts: string[],
        public intensity: number = 1
    ) {}

    public static Build(data: any): EventCard {
        return new EventCard(
            data.id,
            data.name,
            data.normalTexts,
            data.harshTexts,
            data.intensity
        );
    }
}