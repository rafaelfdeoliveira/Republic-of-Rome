import { Age } from "./age.model";
import { ForumCard } from "./forum-card.model";

export class Bequest extends ForumCard {

    public fulfilled: boolean = false;

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly texts: string[]
    ) {
        super(id, name, age);
    }
}