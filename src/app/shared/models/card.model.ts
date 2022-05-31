import { Age } from "./age.model";
import { FactionCard } from "./faction-card.model";
import { ForumCard } from "./forum-card.model";

export abstract class Card {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly age: Age,
        public readonly textColor: string
    ) {}

    public static Build(data: any): Card {
        if (data.textColor === 'black') {
            return ForumCard.Build(data);
        }
        return FactionCard.Build(data);
    }
}