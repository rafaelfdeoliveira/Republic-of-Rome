import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class Assassin extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Assassin',
            age,
            [
                'Support for an assassination plot is widespread.',
                'Add 1 to your Assassination attempt and any Bodyguards rerolls. Play before resolution and discard after use.',
                'Cumulative effect with other Bodyguard and Assassin cards.'
            ]
        )
    }
}