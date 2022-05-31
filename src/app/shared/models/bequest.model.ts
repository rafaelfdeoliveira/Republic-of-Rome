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

    public static Build(data: any): Bequest {
        const bequest = new Bequest(
            data.id,
            data.name,
            data.age,
            data.texts
        );

        bequest.fulfilled = data.fulfilled;

        return bequest;
    }
}