export class Province {

    private _provincialArmies: number = 0;
    private _provincialFleets: number = 0;
    private _garrisonLegions: number = 0

    constructor(
        public readonly name: string,
        public readonly warsToDefendNames: string[],
        public readonly warsToDefendText: string,
        private readonly _undevelopedLandStrength: number,
        private readonly _undevelopedFleetStrength: number,
        private readonly getUndevelopedProvincialSpoils: () => number,
        private readonly getUndevelopedStateIncome: () => number,
        private readonly _undevelopedLocalTaxes: number,
        private readonly _undevelopedMaxProvincialArmies: number,
        private readonly _undevelopedMaxProvincialFleets: number,
        private readonly _undevelopedSubtitle: string,
        private readonly _developedLandStrength: number,
        private readonly _developedFleetStrength: number,
        private readonly getDevelopedProvincialSpoils: () => number,
        private readonly getDevelopedStateIncome: () => number,
        private readonly _developedLocalTaxes: number,
        private readonly _developedMaxProvincialArmies: number,
        private readonly _developedMaxProvincialFleets: number,
        private readonly _developedSubtitle: string = 'Developed by: 1d6 ≥ 6',
        public isDevelopedProvince: boolean = false
    ) {}

    public set provincialArmies(newProvincialArmies: number) {
        this._provincialArmies = this.getLimitedPositiveValue(newProvincialArmies, this.maxProvincialArmies);
    }

    public get provincialArmies(): number {
        return this._provincialArmies;
    }

    public set provincialFleets(newProvincialFleets: number) {
        this._provincialFleets = this.getLimitedPositiveValue(newProvincialFleets, this.maxProvincialFleets);
    }

    public get provincialFleets(): number {
        return this._provincialFleets;
    }

    public set garrisonLegions(newGarrisonLegions: number) {
        this._garrisonLegions = this.getLimitedPositiveValue(newGarrisonLegions, 25);
    }

    public get garrisonLegions(): number {
        return this._garrisonLegions;
    }

    public get landStrength(): number {
        return this.getCorrectProperty(this._developedLandStrength, this._undevelopedLandStrength);
    }

    public get fleetStrength(): number {
        return this.getCorrectProperty(this._developedFleetStrength, this._undevelopedFleetStrength);
    }

    public getProvincialSpoils(): number {
        return this.getCorrectProperty(this.getDevelopedProvincialSpoils, this.getUndevelopedProvincialSpoils).call(this);
    }

    public getStateIncome(): number {
        return this.getCorrectProperty(this.getDevelopedStateIncome, this.getUndevelopedStateIncome).call(this);
    }

    public get localTaxes(): number {
        return this.getCorrectProperty(this._developedLocalTaxes, this._undevelopedLocalTaxes);
    }

    public get maxProvincialArmies(): number {
        return this.getCorrectProperty(this._developedMaxProvincialArmies, this._undevelopedMaxProvincialArmies);
    }

    public get maxProvincialFleets(): number {
        return this.getCorrectProperty(this._developedMaxProvincialFleets, this._undevelopedMaxProvincialFleets);
    }

    public get subtitle(): string {
        return this.getCorrectProperty(this._developedSubtitle, this._undevelopedSubtitle);
    }

    private getLimitedPositiveValue(proposedValue: number, maxAllowedValue: number): number {
        if (proposedValue < 0) return 0;
        if (proposedValue > maxAllowedValue) return maxAllowedValue;
        return proposedValue;
    }

    private getCorrectProperty<T>(developedProperty: T, undevelopedProperty: T): T {
        if (this.isDevelopedProvince) return developedProperty;
        return undevelopedProperty;
    }
}