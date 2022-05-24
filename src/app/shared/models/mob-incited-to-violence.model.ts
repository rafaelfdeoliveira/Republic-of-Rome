import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class MobIncitedToViolence extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Mob Incited to Violence',
            age,
            [
                'This card may be played against any player who just resolved (wheter sucessful or not) a Murder of a Tribune or Graft Intrigue Card.',
                'Draw 1d6 Mortality chits plus the Oratory rating of one of your Senators in Rome.',
                'Chits corresponding to Senators in Rome belonging to the Faction of the player cancelling the Tribune are killed.'
            ]
        )
    }
}