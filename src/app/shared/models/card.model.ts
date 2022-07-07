import { Age } from "./age.model";

export abstract class Card {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly age: Age,
        public readonly textColor: string
    ) {}
}