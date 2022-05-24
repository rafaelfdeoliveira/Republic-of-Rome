import { Age } from "./age.model";
import { FactionCard } from "./faction-card.model";

export class Law extends FactionCard {

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly texts: string[]
    ) {
        super(id, name, age)
    }
}