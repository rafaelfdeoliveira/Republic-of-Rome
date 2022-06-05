import { EnemyLeader } from './enemy-leader.model';
import { War } from './war.model';

export class WarSet {

    public firstWar: War | null = null;
    public secondWar: War | null = null;
    public thirdWar: War | null = null;
    public fourthWar: War | null = null;
    public firstLeader: EnemyLeader | null = null;
    public secondLeader: EnemyLeader | null = null;

    constructor() {}

    public static Build(data: any): WarSet {
        const warSet = new WarSet();
        if (data.firstWar) warSet.firstWar = War.Build(data.firstWar);
        if (data.secondWar) warSet.secondWar = War.Build(data.secondWar);
        if (data.thirdWar) warSet.thirdWar = War.Build(data.thirdWar);
        if (data.fourthWar) warSet.fourthWar = War.Build(data.fourthWar);
        if (data.firstLeader) warSet.firstLeader = EnemyLeader.Build(data.firstLeader);
        if (data.secondLeader) warSet.secondLeader = EnemyLeader.Build(data.secondLeader);
        return warSet;
    }

    public addNewWar(newWar: War) {
        switch(newWar.warNumber) {
            case 1:
                this.firstWar = newWar;
                return;
            case 2:
                this.secondWar = newWar;
                return;
            case 3:
                this.thirdWar = newWar;
                return;
            case 4:
                this.fourthWar = newWar;
                return;
            default:
                throw new Error(`${newWar.name} has an invalid war number`);
        }
    }

    public addNewEnemyLeader(newEnemyLeader: EnemyLeader) {
        if (this.firstLeader) {
            this.secondLeader = newEnemyLeader;
            return;
        }

        this.firstLeader = newEnemyLeader;
    }


}