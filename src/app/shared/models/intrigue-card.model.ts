import { Age } from "./age.model";
import { FactionCard } from "./faction-card.model";

export abstract class IntrigueCard extends FactionCard {

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly texts: string[]
    ) {
        super(id, name, age);
    }
}