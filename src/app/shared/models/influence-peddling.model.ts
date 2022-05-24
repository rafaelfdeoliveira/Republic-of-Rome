import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class InfluencePeddling extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Influence Peddling',
            age,
            [
                'You may discard this card anytime other than during the Revolution Phase and draw an unplayed card at random from an opponent of your choice.'
            ]
        )
    }
}