import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class Blackmail extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Blackmail',
            age,
            [
                'For your Persuasion Attempt on your initiative, make an unopposed Persuasion Attempt against a non-Faction Leader Senator of your choice.',
                'No Talents may be spent to defend against your only Persuasion Attempt this Initiative. Talents already on the target still count.',
                'If it fails, the target Senators\'s Influence and Popularity are each reduced by 2d6.'
            ]
        )
    }
}