export class MajorOffice {

    constructor(
        public readonly name: string,
        public readonly rank: 1 | 2 | 3 | 4 | 5 | 6,
        public readonly influenceGain: number
    ) {}

    public static Build(data: any): MajorOffice {
        return new MajorOffice(
            data.name,
            data.rank,
            data.influenceGain
        );
    }
}

export const getAllMajorOffices = (): MajorOffice[] => [
    new MajorOffice('Dictator', 1, 7),
    new MajorOffice('Rome Consul', 2, 5),
    new MajorOffice('Field Consul', 3, 5),
    new MajorOffice('Censor', 4, 5),
    new MajorOffice('Master of Horse', 5, 3),
    new MajorOffice('Pontifex Maximus', 6, 5)
];