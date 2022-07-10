export class Legion {

    constructor(
        public id: number,
        public isVeteran: boolean = false
    ) {}
}

export const getFullLegionPool = (): Legion[] => new Array(25).fill('').map((value, index) => new Legion(index + 1));