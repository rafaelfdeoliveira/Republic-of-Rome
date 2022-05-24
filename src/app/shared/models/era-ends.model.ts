import { ForumCard } from "./forum-card.model";

export class EraEnds extends ForumCard {

    public readonly texts: string[] = [
        'The game will be over at the end of the Forum Phase.',
        'All Persuasion Attempts automatically fail on a roll of 9 or higher (as opposed to the normal 10 or higher).'
    ]

    constructor() {
        super(65, 'Era Ends', null)
    }
}