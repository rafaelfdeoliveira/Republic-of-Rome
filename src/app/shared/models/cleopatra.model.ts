import { Age } from "./age.model";
import { FactionCard } from './faction-card.model';

export class Cleopatra extends FactionCard {
    public readonly matchingWarsCommonName = 'Alexandrine War';
    public readonly strength = 3;
    public readonly disaster = 16;
    public readonly standoff = 15;
    public readonly timePeriod = '69 - 30 BC';
    public readonly specialTexts = [
        'KEEP IN HAND WHEN DRAWN. Play before Alexandrine War resolution for an effect of the playing player\'s choice. EITHER: Give the Roman commander +3 Military and 50 Talents, but -5 Popularity. OR: Play as a +3 Enemy Leader matching the Alexandrine War.',
        'Either +3 effect remains until the Alexandrine War leaves play.'
    ];

    constructor() {
        super(139, 'Cleopatra VII', Age.LATE_REPUBLIC);
    }
}