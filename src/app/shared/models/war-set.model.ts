import { EnemyLeader } from './enemy-leader.model';
import { War } from './war.model';

export class WarSet {

    constructor(
        private _wars: War[] = [],
        private _leaders: EnemyLeader[] = []
    ) {}

    public static Build(data: any): WarSet {
        return new WarSet(
            data.wars.map(war => War.Build(war)),
            data.leaders.map(leader => EnemyLeader.Build(leader))
        );
    }

    public set wars(newWars: War[]) {
        if (newWars.length >= 4) throw new Error('Maximum of 4 wars in War Set');
        this._wars = newWars
        this._wars.sort((war1, war2) => {
            return war1.id - war2.id;
        });
    }

    public get wars() {
        return this._wars;
    }

    public set leaders(newLeaders: EnemyLeader[]) {
        if (newLeaders.length >= 2) throw new Error('Maximum of 2 enemy leaders in War Set');
        this._leaders = newLeaders;
    }

    public get leaders() {
        return this._leaders;
    }
}