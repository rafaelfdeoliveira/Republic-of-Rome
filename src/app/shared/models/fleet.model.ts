export class Fleet {
    
    constructor(
        public id: number
    ) {}
}

export const getFullFleetPool = (): Fleet[] => new Array(25).map((value, index) => new Fleet(index + 1));