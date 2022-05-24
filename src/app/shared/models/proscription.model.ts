import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class Proscription extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Proscription',
            age,
            [
                'Playable during the Combat Phase immediately after a victory (by either side) in a Civil War involving the Senate and a Rebel.',
                'The HRAO may eliminate all the Knights on the board and receive 1d6 Talents per Knight into his personal treasury.',
                'Henceforth, his Faction may not recruit Knights and all other players may add 1 to their Knight Attraction roll.',
                'If the HRAO declines, this card is discarded and has no effect.',
                'For the purpose of determining the HRAO for this card all Victorious Commanders are considered to be in Rome.'
            ]
        )
    }
}