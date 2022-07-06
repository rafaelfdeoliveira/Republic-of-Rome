export class Legion {

    constructor(
        public id: number,
        public isVeteran: boolean = false
    ) {}
}

export const getFullLegionPool = (): Legion[] => new Array(25).map((value, index) => new Legion(index + 1));