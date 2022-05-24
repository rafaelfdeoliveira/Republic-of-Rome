import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class Seduction extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Seduction',
            age,
            [
                'For your Persuasion Attempt on your initiative, make an unopposed Persuasion Attempt against a non-Faction Leader Senator of your choice.',
                'No Talents may be spent to defend against your only Persuasion Attempt this Initative. Talents already on the target still count.',
                'Playable immediately before announcing your target.'
            ]
        )
    }
}