import { Age } from "./age.model";
import { Card } from "./card.model";

export abstract class FactionCard extends Card {
    
    constructor(
        id: number,
        name: string,
        age: Age
    ) {
        super(id, name, age, 'red');
    }
}