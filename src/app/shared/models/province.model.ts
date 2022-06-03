import { rollDice, getDiceRollFunctionByText, getLimitedPositiveValue } from "../utilities/common.utility";
import { ProvinceName } from "./province-name.model";

export class Province {

    private readonly getUndevelopedProvincialSpoils: () => number;
    private readonly getUndevelopedStateIncome: () => number;
    private readonly getDevelopedProvincialSpoils: () => number;
    private readonly getDevelopedStateIncome: () => number;
    private _provincialArmies: number = 0;
    private _provincialFleets: number = 0;
    private _garrisonLegions: number = 0

    constructor(
        public readonly name: ProvinceName,
        public readonly isFrontierProvince: boolean,
        public readonly warsToDefendNames: string[],
        private readonly undevelopedLandStrength: number,
        private readonly undevelopedFleetStrength: number,
        private readonly undevelopedProvincialSpoilsText: string,
        private readonly undevelopedStateIncomeText: string,
        private readonly undevelopedLocalTaxes: number,
        private readonly undevelopedMaxProvincialArmies: number,
        private readonly undevelopedMaxProvincialFleets: number,
        private readonly undevelopedSubtitle: string,
        private readonly developedLandStrength: number,
        private readonly developedFleetStrength: number,
        private readonly developedProvincialSpoilsText: string,
        private readonly developedStateIncomeText: string,
        private readonly developedLocalTaxes: number,
        private readonly developedMaxProvincialArmies: number,
        private readonly developedMaxProvincialFleets: number,
        private readonly developedSubtitle: string = 'Developed by: 1d6 ≥ 6',
        public isDevelopedProvince: boolean = false
    ) {
        this.getUndevelopedProvincialSpoils = getDiceRollFunctionByText(undevelopedProvincialSpoilsText);
        this.getUndevelopedStateIncome = getDiceRollFunctionByText(undevelopedStateIncomeText);
        this.getDevelopedProvincialSpoils = getDiceRollFunctionByText(developedProvincialSpoilsText);
        this.getDevelopedStateIncome = getDiceRollFunctionByText(developedStateIncomeText);
    }

    public static Build(data: any): Province {
        const province = new Province(
            data.name,
            data.isFrontierProvince,
            data.warsToDefendNames,
            data.undevelopedLandStrength,
            data.undevelopedFleetStrength,
            data.undevelopedProvincialSpoilsText,
            data.undevelopedStateIncomeText,
            data.undevelopedLocalTaxes,
            data.undevelopedMaxProvincialArmies,
            data.undevelopedMaxProvincialFleets,
            data.undevelopedSubtitle,
            data.developedLandStrength,
            data.developedFleetStrength,
            data.developedProvincialSpoilsText,
            data.developedStateIncomeText,
            data.developedLocalTaxes,
            data.developedMaxProvincialArmies,
            data.developedMaxProvincialFleets,
            data.developedSubtitle,
            data.isDevelopedProvince
        );
        
        province.provincialArmies = data._provincialArmies;
        province.provincialFleets = data._provincialFleets;
        province.garrisonLegions = data._garrisonLegions;

        return province;
    }

    public set provincialArmies(newProvincialArmies: number) {
        this._provincialArmies = getLimitedPositiveValue(newProvincialArmies, this.maxProvincialArmies);
    }

    public get provincialArmies(): number {
        return this._provincialArmies;
    }

    public set provincialFleets(newProvincialFleets: number) {
        this._provincialFleets = getLimitedPositiveValue(newProvincialFleets, this.maxProvincialFleets);
    }

    public get provincialFleets(): number {
        return this._provincialFleets;
    }

    public set garrisonLegions(newGarrisonLegions: number) {
        this._garrisonLegions = getLimitedPositiveValue(newGarrisonLegions, 25);
    }

    public get garrisonLegions(): number {
        return this._garrisonLegions;
    }

    public get landStrength(): number {
        return this.getCorrectProperty(this.developedLandStrength, this.undevelopedLandStrength);
    }

    public get fleetStrength(): number {
        return this.getCorrectProperty(this.developedFleetStrength, this.undevelopedFleetStrength);
    }

    public get provincialSpoilsText(): string {
        return this.getCorrectProperty(this.developedProvincialSpoilsText, this.undevelopedProvincialSpoilsText);
    }

    public getProvincialSpoils(): number {
        return this.getCorrectProperty(this.getDevelopedProvincialSpoils, this.getUndevelopedProvincialSpoils).call(this);
    }

    public get stateIncomeText(): string {
        return this.getCorrectProperty(this.developedStateIncomeText, this.undevelopedStateIncomeText);
    }

    public getStateIncome(): number {
        return this.getCorrectProperty(this.getDevelopedStateIncome, this.getUndevelopedStateIncome).call(this);
    }

    public get localTaxes(): number {
        return this.getCorrectProperty(this.developedLocalTaxes, this.undevelopedLocalTaxes);
    }

    public get maxProvincialArmies(): number {
        return this.getCorrectProperty(this.developedMaxProvincialArmies, this.undevelopedMaxProvincialArmies);
    }

    public get maxProvincialFleets(): number {
        return this.getCorrectProperty(this.developedMaxProvincialFleets, this.undevelopedMaxProvincialFleets);
    }

    public get subtitle(): string {
        return this.getCorrectProperty(this.developedSubtitle, this.undevelopedSubtitle);
    }

    public tryToDevelopProvince(isGovernorCorrupt: boolean = true): boolean {
        if (this.isDevelopedProvince) return false;
        let roll = rollDice();
        if (!isGovernorCorrupt) roll++;
        if (roll >= 6) this.isDevelopedProvince = true;
        return this.isDevelopedProvince;
    }

    private getCorrectProperty<T>(developedProperty: T, undevelopedProperty: T): T {
        if (this.isDevelopedProvince) return developedProperty;
        return undevelopedProperty;
    }
}