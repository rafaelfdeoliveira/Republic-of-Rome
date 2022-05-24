import { Age } from "./age.model";
import { IntrigueCard } from "./intrigue-card.model";

export class Tribune extends IntrigueCard {

    constructor(
        id: number,
        age: Age
    ) {
        super(
            id,
            'Tribune',
            age,
            [
                'May be used to bypass Presiding Magistrate to initiate proposal.',
                'May veto a Prosecution or proposal prior to or during a Faction\'s turn to vote.',
                'May not veto last eligible candidate, Consul for Life, Dictator Proposals or Assassination Prosecutions.'
            ]
        )
    }
}