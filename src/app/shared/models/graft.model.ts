import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class Graft extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Graft',
            age,
            [
                'A Senator in Rome may cancel a Tribune veto or proposal by paying 1d6 Talents (from Personal Treasury) to the Bank.',
                'This does not stop another Tribune from being played for the same purpose.',
                'The Graft may be cancelled if the rolled ammount is too high but the card is still discarded. If the targeted Tribune is used to make a proposal, this card must be played before any votes are called.'
            ]
        )
    }
}