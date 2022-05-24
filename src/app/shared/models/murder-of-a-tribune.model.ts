import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class MurderOfATribune extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Murder of a Tribune',
            age,
            [
                'One of your Senators in Rome may attempt to cancel the use of any one Tribune by rolling an even result on a 1d6. Regardless of the result, that Senator in under suspicion and loses Popularity equal to the die roll. This does not stop another Tribune from being played for the same purpose.',
                'If the target Tribune is to make a proposal, the attempt must be made before any votes are called.'
            ]
        )
    }
}