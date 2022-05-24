import { Age } from "./age.model";
import { ForumCard } from "./forum-card.model";

export class War extends ForumCard {

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly landStrength: number,
        public readonly fleetSupport: number,
        public readonly fleetStrength: number,
        public readonly disasters: number[],
        public readonly standoffs: number[],
        public readonly spoils: number,
        public readonly timePeriod: string,
        public readonly matchingWarsCommonName: string = name,
        public readonly matchingWarsIds: number[] = [],
        public readonly createdProvinces: string[] = [],
        public readonly attackedProvinces: string[] = [],
        public readonly armamentIcon: boolean = false,
        public readonly droughtIcon: boolean = false,
        public readonly revoltedProvince: string = ''
    ) {
        super(id, name, age);
    }

    public getWarNumber(): number {
        const orderedMatchingWarsIds = [...this.matchingWarsIds, this.id].sort();
        return orderedMatchingWarsIds.indexOf(this.id) + 1;
    }

    
}