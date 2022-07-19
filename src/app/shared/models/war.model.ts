import { Age } from "./age.model";
import { ForumCard } from "./forum-card.model";
import { ProvinceName } from "./province-name.model";
import { getListItemsText, getNumberOrderingSuffix } from "../utilities/common.utility";

export class War extends ForumCard {

    public navalVictory = false;
    public readonly warNumber: number;
    public readonly maxWarNumber: number;
    public readonly subtitle: string;
    public readonly createdProvincesText: string;
    public readonly attackedProvincesText: string;
    public readonly revoltedProvincesText: string;

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
        public readonly revoltedProvinces: ProvinceName[] = [],
        public readonly startAsRevolt: boolean = false,
        public readonly specialTexts: string[] = []
    ) {
        super(id, name, age);
        this.warNumber = this.getWarNumber();
        this.maxWarNumber = this.matchingWarsIds.length + 1;
        this.subtitle = this.getSubtitle();
        this.createdProvincesText = getListItemsText(this.createdProvinces);
        this.attackedProvincesText = getListItemsText(this.attackedProvinces);
        this.revoltedProvincesText = getListItemsText(this.revoltedProvinces);
    }

    public static Build(data: any): War {
        const war = new War(
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
            data.revoltedProvinces,
            data.startAsRevolt,
            data.specialTexts
        );
        war.navalVictory = data.navalVictory;
        return war;
    }

    private getWarNumber(): number {
        const orderedMatchingWarsIds = [...this.matchingWarsIds, this.id].sort();
        return orderedMatchingWarsIds.indexOf(this.id) + 1;
    }

    private getSubtitle(): string {
        if (!this.matchingWarsCommonName) return '';
        return `${this.warNumber}${getNumberOrderingSuffix(this.warNumber)} of ${this.maxWarNumber} ${this.matchingWarsCommonName}`;
    }
}