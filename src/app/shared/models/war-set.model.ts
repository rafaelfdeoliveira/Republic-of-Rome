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

    public get wars(): War[] {
        let wars: War[] = [];
        if (this.firstWar) wars.push(this.firstWar);
        if (this.secondWar) wars.push(this.secondWar);
        if (this.thirdWar) wars.push(this.thirdWar);
        if (this.fourthWar) wars.push(this.fourthWar);
        return wars;
    }

    public get enemyLeaders(): EnemyLeader[] {
        let enemyLeaders: EnemyLeader[] = [];
        if (this.firstLeader) enemyLeaders.push(this.firstLeader);
        if (this.secondLeader) enemyLeaders.push(this.secondLeader);
        return enemyLeaders;
    }

    public get landStrength(): number {
        const wars = this.wars;
        if (!wars.length) return 0;
        return wars[0].landStrength * wars.length + this.leadersStrength;
    }

    public get fleetStrength(): number {
        const wars = this.wars;
        if (!wars.length) return 0;
        return wars[0].fleetStrength * wars.length + this.leadersStrength;
    }

    public get fleetSupport(): number {
        const wars = this.wars;
        if (!wars.length) return 0;
        return wars[0].fleetSupport;
    }

    public get warDisasters(): number[] {
        const wars = this.wars;
        if (!wars.length) return [];
        return wars[0].disasters;
    }

    public get disasters(): number[] {
        const leadersDisasters: number[] = this.enemyLeaders.reduce((acc, leader) => [...acc, leader.disaster], []);
        return [...this.warDisasters, ...leadersDisasters];
    }

    public get warStandoffs(): number[] {
        const wars = this.wars;
        if (!wars.length) return [];
        return wars[0].standoffs;
    }

    public get standoffs(): number[] {
        const leadersStandoffs: number[] = this.enemyLeaders.reduce((acc, leader) => [...acc, leader.standoff], []);
        return [...this.warStandoffs, ...leadersStandoffs];
    }

    private get leadersStrength(): number {
        return this.enemyLeaders.reduce((acc, leader) => acc + leader.strength, 0);
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