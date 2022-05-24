import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class OpenBodyguard extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Open Bodyguard',
            age,
            [
                'May be played only during the Revenue Phase on a Senator in Rome belonging to the card player. That Senator must now pay 1 Talent and one Popularity per turn during the Revenue Phase. It remains in effect with that Senator until he dies or fails to make payment (at which time it is discarded). This Senator may subtract 2 from all Assassin attempts on him.',
                'If the Assassin wasn\'t caught then, regardless of the original result, an addition roll must be made per Bodyguard card played just to try and catch the Assassin. These re-rolls use the original roll modifier and any "Killed" result is ignored.'
            ]
        )
    }
}