import { Age } from "./age.model";
import { FactionCard } from "./faction-card.model";

export class Law extends FactionCard {

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly lawTexts: string[],
        public readonly advancedLawTexts: string[] = []
    ) {
        super(id, name, age)
    }

    public static Build(data: any): Law {
        return new Law(
            data.id,
            data.name,
            data.age,
            data.lawTexts,
            data.advancedLawTexts
        );
    }
}