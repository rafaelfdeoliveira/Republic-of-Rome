import { Age } from "./age.model";
import { Assassin } from "./assassin.model";
import { Blackmail } from "./blackmail.model";
import { FactionCard } from "./faction-card.model";
import { Graft } from "./graft.model";
import { InfluencePeddling } from "./influence-peddling.model";
import { MobIncitedToViolence } from "./mob-incited-to-violence.model";
import { MurderOfATribune } from "./murder-of-a-tribune.model";
import { OpenBodyguard } from "./open-bodyguard.model";
import { Proscription } from "./proscription.model";
import { SecretBodyguard } from "./secret-bodyguard.model";
import { Seduction } from "./seduction.model";
import { Tribune } from "./tribune.model";

export abstract class IntrigueCard extends FactionCard {

    constructor(
        id: number,
        name: string,
        age: Age,
        public readonly texts: string[]
    ) {
        super(id, name, age);
    }

    public static Build(data: any): IntrigueCard {
        switch(data.name) {
            case 'Assassin':
                return new Assassin(data.id, data.age);
            case 'Blackmail':
                return new Blackmail(data.id, data.age);
            case 'Graft':
                return new Graft(data.id, data.age);
            case 'Influence Peddling':
                return new InfluencePeddling(data.id, data.age);
            case 'Mob Incited to Violence':
                return new MobIncitedToViolence(data.id, data.age);
            case 'Murder of a Tribune':
                return new MurderOfATribune(data.id, data.age);
            case 'Open Bodyguard':
                return new OpenBodyguard(data.id, data.age);
            case 'Proscription':
                return new Proscription(data.id, data.age);
            case 'Secret Bodyguard':
                return new SecretBodyguard(data.id, data.age);
            case 'Seduction':
                return new Seduction(data.id, data.age);
            default:
                return new Tribune(data.id, data.age);
        }
    }
}