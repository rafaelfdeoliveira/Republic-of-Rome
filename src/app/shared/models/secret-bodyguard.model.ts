import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class SecretBodyguard extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Secret Bodyguard',
            age,
            [
                'Playable after any Assassination attempt resolution on one of your Senators to reduce the result by 1. Discard after use.',
                'If the Assassin is not caught then, regardless of the original result, an additional roll must be made per Secret Bodyguard played just to try and catch the Assassin. The re-rolls use the original roll modifier and any "Killed" result is ignored.'
            ]
        )
    }
}