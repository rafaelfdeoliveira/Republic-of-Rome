export class Fleet {
    
    constructor(
        public id: number
    ) {}
}

export const getFullFleetPool = (): Fleet[] => new Array(25).fill('').map((value, index) => new Fleet(index + 1));