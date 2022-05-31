import { Age } from "./age.model";
import { Assassin } from "./assassin.model";
import { Blackmail } from "./blackmail.model";
import { Card } from "./card.model";
import { Concession } from "./concession.model";
import { EnemyLeader } from "./enemy-leader.model";
import { Family } from "./family.model";
import { InfluencePeddling } from "./influence-peddling.model";
import { ProvinceName } from "./province-name.model";
import { SecretBodyguard } from "./secret-bodyguard.model";
import { Seduction } from "./seduction.model";
import { Statesman } from "./statesman.model";
import { Tribune } from "./tribune.model";
import { War } from "./war.model";

export const earlyRepublicDeck: Card[] = [
    new War(
        5,
        '1st Gallic War',
        Age.EARLY_REPUBLIC,
        10,
        0,
        0,
        [13],
        [15],
        20,
        '225 - 222 BC',
        'Gallic Wars',
        [115, 116],
        [ProvinceName.GALLIA_CISALPINA],
        [ProvinceName.GALLIA_CISALPINA, ProvinceName.GALLIA_NARBONENSIS, ProvinceName.GALLIA_TRANSALPINA],
        true
    ),
    new War(
        3,
        '1st Illyrian War',
        Age.EARLY_REPUBLIC,
        5,
        3,
        0,
        [5],
        [17],
        10,
        '229 - 228 BC',
        'Illyrian Wars',
        [4],
        [ProvinceName.ILLYRICUM],
        [ProvinceName.MACEDONIA],
        false,
        true
    ),
    new War(
        6,
        '1st Macedonian War',
        Age.EARLY_REPUBLIC,
        12,
        10,
        0,
        [12],
        [11, 18],
        25,
        '215 - 205 BC',
        'Macedonian Wars',
        [7, 66, 67],
        [],
        [ProvinceName.ILLYRICUM, ProvinceName.MACEDONIA],
        true,
        false,
        [ProvinceName.MACEDONIA]
    ),
    new War(
        1,
        '1st Punic War',
        Age.EARLY_REPUBLIC,
        10,
        5,
        10,
        [13],
        [11, 14],
        35,
        '264 - 241 BC',
        'Punic Wars',
        [2, 69],
        [ProvinceName.SICILIA, ProvinceName.SARDINIA_ET_CORSICA]
    ),
    new War(
        4,
        '2nd Illyrian War',
        Age.EARLY_REPUBLIC,
        4,
        2,
        0,
        [5],
        [17],
        10,
        '220 - 219 BC',
        'Illyrian Wars',
        [3],
        [ProvinceName.ILLYRICUM],
        [ProvinceName.MACEDONIA],
        true
    ),
    new War(
        7,
        '2nd Macedonian War',
        Age.EARLY_REPUBLIC,
        10,
        5,
        0,
        [13],
        [14],
        45,
        '200 - 196 BC',
        'Macedonian Wars',
        [6, 66, 67],
        [],
        [ProvinceName.ILLYRICUM, ProvinceName.MACEDONIA],
        false,
        false,
        [ProvinceName.MACEDONIA]
    ),
    new War(
        2,
        '2nd Punic War',
        Age.EARLY_REPUBLIC,
        15,
        5,
        0,
        [10],
        [11, 15],
        25,
        '218 - 201 BC',
        'Punic Wars',
        [1, 69],
        [ProvinceName.HISPANIA_CITERIOR, ProvinceName.HISPANIA_ULTERIOR],
        [ProvinceName.GALLIA_CISALPINA, ProvinceName.GALLIA_NARBONENSIS],
        true
    ),
    new Family(22, 'Acilius', Age.EARLY_REPUBLIC, 12, 2, 2, 7, 3),
    new Concession(
        54,
        'Aegyptian Grain',
        5,
        [
            'Voluntary x2 Grain Concession Income and -2 Popularity if Drought in effect. +1 Income multiplier and -1 Popularity per additional Drought effect.',
            'Destroyed by Alexandrine War.'
        ]
    ),
    new Family(24, 'Aelius', Age.EARLY_REPUBLIC, 14, 3, 4, 7, 2),
    new Statesman(
        31,
        'L. Aemilius Paullus Macedonicus',
        Age.EARLY_REPUBLIC,
        19,
        1,
        5,
        4,
        8,
        4,
        ['Nullified Disaster/Standoff numbers on Macedonian Wars but not any Leaders(s).']
    ),
    new Family(30, 'Aemilius', Age.EARLY_REPUBLIC, 19, 4, 2, 8, 1, true),
    new EnemyLeader(36, 'Antiochus III', Age.EARLY_REPUBLIC, 'Syrian War', 5, 14, 17, '242 - 187 BC'),
    new Concession(
        52,
        'Armaments',
        0,
        [
            'Immediately collect 2 Talents per new Legion raised.',
            'May be destroyed by a Natural Disaster Event.'
        ]
    ),
    new Assassin(49, Age.EARLY_REPUBLIC),
    new Family(19, 'Aurelius', Age.EARLY_REPUBLIC, 9, 2, 3, 7, 3),
    new Blackmail(51, Age.EARLY_REPUBLIC),
    new Family(26, 'Calpurnicus', Age.EARLY_REPUBLIC, 16, 1, 2, 9, 2),
    new Statesman(
        33,
        'M. Porcius Cato The Elder',
        Age.EARLY_REPUBLIC,
        22,
        1,
        1,
        6,
        10,
        1,
        ['1 Free Tribune per Turn', '+6 votes on Law Proposals'],
        0,
        '-Scipio (1A & 1B)/ Flamininus (18A)',
        ['1-1', '1-2', '18-1']
    ),
    new Family(15, 'Claudius', Age.EARLY_REPUBLIC, 5, 2, 3, 7, 4),
    new Statesman(
        10,
        'P. Cornelius Scipio Africanus',
        Age.EARLY_REPUBLIC,
        1,
        1,
        5,
        5,
        7,
        6,
        ['Nullifies Disaster/Standoff numbers on Punic Wars but not any Leader(s).'],
        0,
        '-Cato (22A)',
        ['22-1']
    ),
    new Family(9, 'Cornelius', Age.EARLY_REPUBLIC, 1, 4, 3, 9, 5, true),
    new Statesman(
        12,
        'Q. Fabius Maximus Verrucosus Cuncator',
        Age.EARLY_REPUBLIC,
        2,
        1,
        5,
        2,
        7,
        3,
        ['Halve all losses (rounded up) in Combat unless Master of Horse.']
    ),
    new Family(11, 'Fabius', Age.EARLY_REPUBLIC, 2, 4, 2, 9, 5, true),
    new Family(23, 'Flaminius', Age.EARLY_REPUBLIC, 13, 4, 2, 6, 3),
    new Family(17, 'Fulvius', Age.EARLY_REPUBLIC, 7, 2, 2, 8, 4, true),
    new Family(18, 'Furius', Age.EARLY_REPUBLIC, 8, 3, 3, 8, 3),
    new EnemyLeader(
        34,
        'Hamilcar',
        Age.EARLY_REPUBLIC,
        'Punic Wars',
        3,
        8,
        12,
        '275 - 229 BC',
        ['May combine with Hannibal.']
    ),
    new EnemyLeader(
        35,
        'Hannibal',
        Age.EARLY_REPUBLIC,
        'Punic Wars',
        7,
        9,
        16,
        '247 - 183 BC',
        [
            'May combine with Hamilcar',
            'If matched with 2nd Punic War roll 1d6 at the end of every Forum Phase to destroy a Tax Farmer until defeated.'
        ]
    ),
    new Concession(56, 'Harbor Fees', 3, ['May be destroyed by a Natural Disaster event.']),
    new InfluencePeddling(48, Age.EARLY_REPUBLIC),
    new Family(14, 'Julius', Age.EARLY_REPUBLIC, 4, 4, 3, 9, 4, true),
    new Family(20, 'Junius', Age.EARLY_REPUBLIC, 10, 1, 2, 8, 3),
    new Concession(
        58,
        'Land Commissioner',
        3,
        [
            'Cannot be Destroyed.',
            'Return to Forum if owning Senator is convicted, killed or no Land Bill is in effect at end of Forum Phase.'
        ]
    ),
    new Family(16, 'Manlius', Age.EARLY_REPUBLIC, 6, 3, 2, 7, 4),
    new Concession(57, 'Mining', 3, ['May be destroyed by a Natural Disaster event.']),
    new Family(21, 'Papirius', Age.EARLY_REPUBLIC, 11, 1, 2, 6, 3),
    new EnemyLeader(37, 'Philip V', Age.EARLY_REPUBLIC, 'Macedonian Wars', 6, 15, 14, '238 - 179 BC'),
    new Family(27, 'Plautius', Age.EARLY_REPUBLIC, 17, 2, 1, 6, 2),
    new Statesman(
        29,
        'T. Quinctius Flamininus',
        Age.EARLY_REPUBLIC,
        18,
        1,
        5,
        4,
        7,
        4,
        ['Nullifies Disaster/Standoff numbers on Macedonian Wars but not any Leader(s)'],
        0,
        '-Cato (22A)',
        ['22-1']
    ),
    new Family(28, 'Quinctius', Age.EARLY_REPUBLIC, 18, 3, 2, 6, 1, true),
    new SecretBodyguard(47, Age.EARLY_REPUBLIC),
    new Seduction(50, Age.EARLY_REPUBLIC),
    new Concession(
        53,
        'Ship Building',
        0,
        [
            'Immediately collect 3 Talents per new Fleet built',
            'May be destroyed by a Natural Disaster Event'
        ]
    ),
    new Concession(
        55,
        'Sicilian Grain',
        4,
        [
            'Voluntary x2 Grain Concession Income and -2 Popularity if Drought effect. +1 Income multiplier and -1 Popularity per additional Drought effect.',
            'Destroyed by Sicilian Slave Revolts.'
        ]
    ),
    new Family(25, 'Sulpicius', Age.EARLY_REPUBLIC, 15, 3, 2, 8, 2),
    new War(
        8,
        'Syrian War',
        Age.EARLY_REPUBLIC,
        6,
        2,
        0,
        [16],
        [15],
        45,
        '192 - 189 BC',
        '',
        [],
        [],
        [ProvinceName.BITHYNIA, ProvinceName.MACEDONIA, ProvinceName.ASIA],
        true,
        false,
        [ProvinceName.SYRIA]
    ),
    new Concession(
        59,
        'Tax Farmer 1',
        2,
        [
            'Destroyed on a 1 on 1d6 as a result of Punic Wars, Hannibal, Gladiator Revolt and/or Spartacus.'
        ]
    ),
    new Concession(
        60,
        'Tax Farmer 2',
        2,
        [
            'Destroyed on a 2 on 1d6 as a result of Punic Wars, Hannibal, Gladiator Revolt and/or Spartacus.'
        ]
    ),
    new Concession(
        61,
        'Tax Farmer 3',
        2,
        [
            'Destroyed on a 3 on 1d6 as a result of Punic Wars, Hannibal, Gladiator Revolt and/or Spartacus.'
        ]
    ),
    new Concession(
        62,
        'Tax Farmer 4',
        2,
        [
            'Destroyed on a 4 on 1d6 as a result of Punic Wars, Hannibal, Gladiator Revolt and/or Spartacus.'
        ]
    ),
    new Concession(
        63,
        'Tax Farmer 5',
        2,
        [
            'Destroyed on a 5 on 1d6 as a result of Punic Wars, Hannibal, Gladiator Revolt and/or Spartacus.'
        ]
    ),
    new Concession(
        64,
        'Tax Farmer 6',
        2,
        [
            'Destroyed on a 6 on 1d6 as a result of Punic Wars, Hannibal, Gladiator Revolt and/or Spartacus.'
        ]
    ),
    new Family(32, 'Terentius', Age.EARLY_REPUBLIC, 20, 2, 1, 6, 1),
    new Tribune(43, Age.EARLY_REPUBLIC),
    new Tribune(42, Age.EARLY_REPUBLIC),
    new Tribune(45, Age.EARLY_REPUBLIC),
    new Tribune(38, Age.EARLY_REPUBLIC),
    new Tribune(39, Age.EARLY_REPUBLIC),
    new Tribune(40, Age.EARLY_REPUBLIC),
    new Tribune(44, Age.EARLY_REPUBLIC),
    new Tribune(46, Age.EARLY_REPUBLIC),
    new Tribune(41, Age.EARLY_REPUBLIC),
    new Family(13, 'Valerius', Age.EARLY_REPUBLIC, 3, 1, 2, 10, 5)
];