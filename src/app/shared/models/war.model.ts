import { Age } from "./age.model";
import { ForumCard } from "./forum-card.model";
import { ProvinceName } from "./province-name.model";

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
        public readonly matchingWarsCommonName: string = '',
        public readonly matchingWarsIds: number[] = [],
        public readonly createdProvinces: ProvinceName[] = [],
        public readonly attackedProvinces: ProvinceName[] = [],
        public readonly armamentIcon: boolean = false,
        public readonly droughtIcon: boolean = false,
        public readonly revoltedProvinces: ProvinceName[] = []
    ) {
        super(id, name, age);
    }

    public static Build(data: any): War {
        return new War(
            data.id,
            data.name,
            data.age,
            data.landStrength,
            data.fleetSupport,
            data.fleetStrength,
            data.disasters,
            data.standoffs,
            data.spoils,
            data.timePeriod,
            data.matchingWarsCommonName,
            data.matchingWarsIds,
            data.createdProvinces,
            data.attackedProvinces,
            data.armamentIcon,
            data.droughtIcon,
            data.revoltedProvinces
        );
    }

    public getWarNumber(): number {
        const orderedMatchingWarsIds = [...this.matchingWarsIds, this.id].sort();
        return orderedMatchingWarsIds.indexOf(this.id) + 1;
    }

    
}