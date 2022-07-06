import { Age } from "./age.model";
import { Assassin } from "./assassin.model";
import { Bequest } from "./bequest.model";
import { Card } from "./card.model";
import { EnemyLeader } from "./enemy-leader.model";
import { Family } from "./family.model";
import { Gracchus } from "./gracchus.model";
import { Graft } from "./graft.model";
import { InfluencePeddling } from "./influence-peddling.model";
import { Law } from "./law.model";
import { MobIncitedToViolence } from "./mob-incited-to-violence.model";
import { MurderOfATribune } from "./murder-of-a-tribune.model";
import { ProvinceName } from "./province-name.model";
import { SecretBodyguard } from "./secret-bodyguard.model";
import { Statesman } from "./statesman.model";
import { Tribune } from "./tribune.model";
import { War } from "./war.model";

export const getMiddleRepublicDeck = (): Card[] => [
    new War(
        71,
        '1st Cilician Pirates',
        Age.MIDDLE_REPUBLIC,
        3,
        2,
        8,
        [18],
        [15],
        10,
        '104 - 101 BC',
        'Cilician Pirates',
        [122],
        [ProvinceName.CILICIA_ET_CYPRUS],
        [ProvinceName.SARDINIA_ET_CORSICA, ProvinceName.BITHYNIA],
        false,
        true
    ),
    new War(
        74,
        'Sicilian Slave Revolt',
        Age.MIDDLE_REPUBLIC,
        4,
        0,
        0,
        [17],
        [15],
        0,
        '135 - 132 BC',
        'Slave Revolts',
        [75, 124],
        [],
        [ProvinceName.SICILIA],
        true,
        true,
        [ProvinceName.SICILIA]
    ),
    new War(
        66,
        '3rd Macedonian War',
        Age.MIDDLE_REPUBLIC,
        8,
        5,
        0,
        [8],
        [14],
        35,
        '171 - 167 BC',
        'Macedonian Wars',
        [6, 7, 67],
        [],
        [ProvinceName.ILLYRICUM, ProvinceName.MACEDONIA],
        true,
        false,
        [ProvinceName.MACEDONIA]
    ),
    new War(
        69,
        '3rd Punic War',
        Age.MIDDLE_REPUBLIC,
        7,
        1,
        0,
        [7],
        [15],
        20,
        '149 - 146 BC',
        'Punic Wars',
        [1, 2],
        [ProvinceName.AFRICA],
        [],
        true
    ),
    new War(
        67,
        '4th Macedonian War',
        Age.MIDDLE_REPUBLIC,
        5,
        1,
        0,
        [5],
        [17],
        30,
        '149 - 148 BC',
        'Macedonian Wars',
        [6, 7, 66],
        [ProvinceName.MACEDONIA],
        [ProvinceName.ILLYRICUM],
        true
    ),
    new Law(
        111,
        'Acilian Law - 122 BC',
        Age.MIDDLE_REPUBLIC,
        ['The Calpurnian Law\'s power to fine corrupt Governors is transferred from the Censor to whichever Faction controls the most Knights at the time the power will be used. Ties are broken by a die roll. The Senators controlling the Knights need not be in Rome. Not playable prior to play of the Calpurnian Law.'],
        ['Passing Laws Advanced Rule: If the Calpurnian Law was discarded or voted down, this may be discarded in the normal method during the Revolution Phase.']
    ),
    new Assassin(100, Age.MIDDLE_REPUBLIC),
    new Assassin(99, Age.MIDDLE_REPUBLIC),
    new Statesman(
        88,
        'C. Marius',
        Age.MIDDLE_REPUBLIC,
        27,
        1,
        5,
        3,
        6,
        5,
        [
            '+1 to Knight roll.',
            'Nullifies Disaster/Standoff on Social and Jugurthine Wars but not any Leader(s).'
        ],
        0,
        '-Sulla (1C)',
        ['1-3']
    ),
    new Gracchus(
        87,
        'C. Sempronius Gracchus',
        2,
        5,
        4,
        3,
        [
            'May propose 1 Land Bill / turn without the use of a Tribune card.',
            'May be played even if 25A is already in play.'
        ],
        '+T. Gracchus (25A)'
    ),
    new Law(
        107,
        'Calpurnian Law - 149 BC',
        Age.MIDDLE_REPUBLIC,
        [
            'A standing court for recovery of damages from Governors is hereby created. The Censor can now fine any one corrupt Governor in Rome 1d6 Talents once per Turn during the Senate Phase of the year of that Governor\'s return to Rome. This does not count as a Prosecution and is not subject to Popular Appeal or Veto.',
            'Fines are paid to the Bank from the Personal Treasury of the ex-governor with any shortfall coming from the Faction Treasury. If he, or his Faction Treasury, is unable to pay, the shortfall is deducted as Popularity and Influence from the Senator.'
        ]
    ),
    new Family(84, 'Cassius', Age.MIDDLE_REPUBLIC, 24, 3, 3, 9, 3),
    new Statesman(
        76,
        'P. Cornelius Scipio Aemilianus Africanus',
        Age.MIDDLE_REPUBLIC,
        1,
        2,
        4,
        3,
        7,
        5,
        ['Nullifies Disaster/Standoff on 3rd Punic War and Spanish Revolts but not any Leader(s).']
    ),
    new Statesman(
        77,
        'L. Cornelius Sulla',
        Age.MIDDLE_REPUBLIC,
        1,
        3,
        4,
        4,
        5,
        5,
        ['Nullifies Disaster/Standoff on Social and Mithridatic Wars but not any Leader(s).'],
        0,
        '-Marius (27A)',
        ['27-1']
    ),
    new Statesman(
        78,
        'M. Fulvius Flaccus',
        Age.MIDDLE_REPUBLIC,
        7,
        1,
        2,
        5,
        6,
        5,
        ['May claim unheld Land Comissioner Concession during Senate Phase any time after Prosecutions provided a Land Bill is in effect.'],
        0,
        '-Laenas (23A)',
        ['23-1']
    ),
    new War(
        70,
        'Germanic Migrations',
        Age.MIDDLE_REPUBLIC,
        15,
        0,
        0,
        [10],
        [11],
        15,
        '113 - 101 BC',
        '',
        [],
        [ProvinceName.GALLIA_NARBONENSIS],
        [ProvinceName.GALLIA_CISALPINA, ProvinceName.ILLYRICUM, ProvinceName.GALLIA_TRANSALPINA],
        true
    ),
    new Graft(103, Age.MIDDLE_REPUBLIC),
    new InfluencePeddling(104, Age.MIDDLE_REPUBLIC),
    new War(
        68,
        'Jugurthine War',
        Age.MIDDLE_REPUBLIC,
        8,
        2,
        0,
        [14],
        [13],
        25,
        '111 - 105 BC',
        '',
        [],
        [],
        [ProvinceName.AFRICA],
        true
    ),
    new War(
        72,
        'Lusitanian War',
        Age.MIDDLE_REPUBLIC,
        6,
        2,
        0,
        [6],
        [11, 16],
        0,
        '154 - 138 BC',
        'Spanish Revolts',
        [73, 123],
        [],
        [ProvinceName.HISPANIA_CITERIOR, ProvinceName.HISPANIA_ULTERIOR],
        true,
        false,
        [ProvinceName.HISPANIA_CITERIOR, ProvinceName.HISPANIA_ULTERIOR]
    ),
    new Law(
        108,
        'Military Reforms - 104 - 100 BC',
        Age.MIDDLE_REPUBLIC,
        ['Power of the Senate declines with rising incidence of military force. Hereafter, no player can be appointed Consul for Life simply by fulfilling 35 Influence requirement.']
    ),
    new MobIncitedToViolence(105, Age.MIDDLE_REPUBLIC),
    new MurderOfATribune(98, Age.MIDDLE_REPUBLIC),
    new MurderOfATribune(97, Age.MIDDLE_REPUBLIC),
    new War(
        73,
        'Numatine War',
        Age.MIDDLE_REPUBLIC,
        8,
        2,
        0,
        [14],
        [11, 18],
        0,
        '143 - 133 BC',
        'Spanish Revolts',
        [72, 123],
        [],
        [ProvinceName.HISPANIA_CITERIOR],
        true,
        false,
        [ProvinceName.HISPANIA_CITERIOR]
    ),
    new Bequest(
        106,
        'Pergamene Bequest',
        Age.MIDDLE_REPUBLIC,
        [
            'The State gains 50 Talents in the Revenue Phase if, in the prior Senate Phase, the Field Consul with 3 Legions and 3 Fleets are sent to retrieve it.',
            'Rebel Consul may keep Bequest.',
            'Creates Province of Asia at the start of the next Forum Phase if collected.',
            'Discard only after collection.'
        ]
    ),
    new Statesman(
        83,
        'P. Popillius Laenas',
        Age.MIDDLE_REPUBLIC,
        23,
        1,
        2,
        5,
        6,
        4,
        ['May beto one Land Bill / Turn without using a Tribune card.'],
        0,
        '-Gracchus (25A & 25B) / -Flaccus (7A)',
        ['25-1', '25-2', '7-1']
    ),
    new Family(82, 'Popillius', Age.MIDDLE_REPUBLIC, 23, 1, 3, 7, 3, true),
    new Family(81, 'Porcius', Age.MIDDLE_REPUBLIC, 22, 2, 4, 10, 1, true),
    new SecretBodyguard(102, Age.MIDDLE_REPUBLIC),
    new SecretBodyguard(101, Age.MIDDLE_REPUBLIC),
    new Family(85, 'Sempronius', Age.MIDDLE_REPUBLIC, 25, 1, 3, 6, 3, true),
    new Law(
        110,
        'Servilian Law - 104 BC',
        Age.MIDDLE_REPUBLIC,
        ['Your Faction, as champion of the Equestrians, may add +1 to all future Knight Attraction attempts OR openly discard this card anytime after the ACILIAN LAW is in effect and thereby repeal the ACILIAN LAW.'],
        ['Passing Laws Advanced Rule: If played for the +1 Knight Attraction the benefit can only affect the player of the card - not the Faction of the sponsor or co-sponsor. If played to repeal the Acilian Law it is voted upon normally.']
    ),
    new Statesman(
        80,
        'C. Servilius Glaucia',
        Age.MIDDLE_REPUBLIC,
        21,
        1,
        1,
        3,
        3,
        2,
        ['Mob Orator: May roll 3d6 when making a Popular Appeal.'],
        0,
        '-Sulla (1C)',
        ['1-3']
    ),
    new Family(79, 'Servilius', Age.MIDDLE_REPUBLIC, 21, 3, 4, 9, 4, true),
    new War(
        75,
        'Sicilian Slave Revolt',
        Age.MIDDLE_REPUBLIC,
        7,
        1,
        0,
        [7],
        [15],
        0,
        '103 - 99 BC',
        'Slave Revolts',
        [74, 124],
        [],
        [ProvinceName.SICILIA],
        true,
        true,
        [ProvinceName.SICILIA]
    ),
    new Gracchus(
        86,
        'T. Sempronius Gracchus',
        1,
        4,
        3,
        2,
        [
            'May propose 1 Land Bill / turn without the use of a Tribune card.',
            'May be played even if 25B is already in play.'
        ],
        '+C. Gracchus (25B)'
    ),
    new Law(
        109,
        'Tradition Erodes - 104 - 100 BC',
        Age.MIDDLE_REPUBLIC,
        ['Hereafter, Senators may repeat as Consul in succeding turns without limit. This card may not be played unless there are Active War(s) with a combined total Strength of at least 15 in play.']
    ),
    new Tribune(90, Age.MIDDLE_REPUBLIC),
    new Tribune(94, Age.MIDDLE_REPUBLIC),
    new Tribune(95, Age.MIDDLE_REPUBLIC),
    new Tribune(93, Age.MIDDLE_REPUBLIC),
    new Tribune(91, Age.MIDDLE_REPUBLIC),
    new Tribune(96, Age.MIDDLE_REPUBLIC),
    new Tribune(92, Age.MIDDLE_REPUBLIC),
    new EnemyLeader(
        89,
        'Viriathus',
        Age.MIDDLE_REPUBLIC,
        'Spanish Revolts',
        5,
        15,
        12,
        '180 - 139 BC',
        ['Will not automatically activate Inactive Spanish Revolts until the required Province(s) for the Revolt(s) are created. Until that time, he resides in the Curia and makes aging rolls.']
    )
];