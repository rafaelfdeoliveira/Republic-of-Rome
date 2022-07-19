import { Age } from "./age.model";
import { Assassin } from "./assassin.model";
import { Bequest } from "./bequest.model";
import { Card } from "./card.model";
import { Cleopatra } from "./cleopatra.model";
import { EnemyLeader } from "./enemy-leader.model";
import { Family } from "./family.model";
import { Graft } from "./graft.model";
import { InfluencePeddling } from "./influence-peddling.model";
import { Law } from "./law.model";
import { MurderOfATribune } from "./murder-of-a-tribune.model";
import { OpenBodyguard } from "./open-bodyguard.model";
import { Proscription } from "./proscription.model";
import { ProvinceName } from "./province-name.model";
import { SecretBodyguard } from "./secret-bodyguard.model";
import { Statesman } from "./statesman.model";
import { Tribune } from "./tribune.model";
import { War } from "./war.model";

export const getLateRepublicDeck = (): Card[] => [
    new War(
        112,
        '1st Mithridatic War',
        Age.LATE_REPUBLIC,
        10,
        5,
        0,
        [13],
        [14],
        30,
        '89 - 85 BC',
        'Mithridatic Wars',
        [113, 114],
        [],
        [ProvinceName.BITHYNIA, ProvinceName.SYRIA, ProvinceName.MACEDONIA, ProvinceName.ASIA],
        true,
        false,
        [ProvinceName.BITHYNIA]
    ),
    new Bequest(
        153,
        '2nd Catilinarian Conspiracy',
        Age.LATE_REPUBLIC,
        [
            'The HRAO must immediately suppress a plot against the State.',
            'He names the offending Faction (which cannot be his own) and draws 1d6 Mortality Chits. Those belonging to the named Faction die.',
            'Regardless of the outcome, the HRAO loses one Popularity for each chit drawn.'
        ]
    ),
    new War(
        122,
        '2nd Cilician Pirates',
        Age.LATE_REPUBLIC,
        3,
        2,
        6,
        [18],
        [12],
        10,
        '67 BC',
        'Cilician Pirates',
        [71],
        [ProvinceName.CRETA_ET_CYRENAICA],
        [ProvinceName.CILICIA_ET_CYPRUS, ProvinceName.CRETA_ET_CYRENAICA],
        false,
        true
    ),
    new War(
        115,
        '2nd Gallic War',
        Age.LATE_REPUBLIC,
        12,
        0,
        0,
        [12],
        [16],
        15,
        '58 - 56 BC',
        'Gallic Wars',
        [5, 116],
        [ProvinceName.GALLIA_TRANSALPINA],
        [ProvinceName.GALLIA_CISALPINA, ProvinceName.GALLIA_NARBONENSIS, ProvinceName.GALLIA_TRANSALPINA],
        false,
        false,
        [ProvinceName.GALLIA_TRANSALPINA]
    ),
    new War(
        113,
        '2nd Mithridatic War',
        Age.LATE_REPUBLIC,
        6,
        4,
        0,
        [16],
        [17],
        15,
        '83 - 82 BC',
        'Mithridatic Wars',
        [112, 114],
        [],
        [ProvinceName.BITHYNIA, ProvinceName.SYRIA, ProvinceName.ASIA],
        false,
        false,
        [ProvinceName.BITHYNIA]
    ),
    new War(
        116,
        '3rd Gallic War',
        Age.LATE_REPUBLIC,
        15,
        0,
        0,
        [10],
        [17],
        15,
        '52 - 51 BC',
        'Gallic Wars',
        [5, 115],
        [ProvinceName.GALLIA_TRANSALPINA],
        [ProvinceName.GALLIA_CISALPINA, ProvinceName.GALLIA_NARBONENSIS, ProvinceName.GALLIA_TRANSALPINA],
        true,
        false,
        [ProvinceName.GALLIA_TRANSALPINA]
    ),
    new War(
        114,
        '3rd Mithridatic War',
        Age.LATE_REPUBLIC,
        8,
        6,
        0,
        [14],
        [11, 17],
        25,
        '74 - 63 BC',
        'Mithridatic Wars',
        [112, 113],
        [ProvinceName.SYRIA, ProvinceName.BITHYNIA],
        [ProvinceName.SYRIA, ProvinceName.ASIA],
        true,
        false,
        [],
        false,
        [
            'Victory creates Province of Syria and the Developed Province of Bithynia.',
            'If the Province of Bithynia exists but is undeveloped, victory automatically develops the Province. No Influence is awarded for development in this way.'
        ]
    ),
    new War(
        118,
        'Alexandrine War',
        Age.LATE_REPUBLIC,
        2,
        2,
        10,
        [18],
        [17],
        25,
        '48 - 47 BC',
        '',
        [],
        [],
        [],
        true,
        true,
        [],
        false,
        ['Eliminates Aegyptian Grain Concession.']
    ),
    new Assassin(149, Age.LATE_REPUBLIC),
    new Assassin(148, Age.LATE_REPUBLIC),
    new Assassin(147, Age.LATE_REPUBLIC),
    new Bequest(
        154,
        'Bithynian Bequest',
        Age.LATE_REPUBLIC,
        [
            'The State gains 35 Talents in the Revenue Phase if, in the prior Senate Phase, the Field Consult with 3 Legions and 3 Fleets are sent to retrieve it.',
            'Rebel Consul may keep Bequest.',
            'Creates Province of Bithynia at the start of the next Forum Phase if collected.',
            'Discard if Bithynia exists or after collection.'
        ]
    ),
    new Statesman(
        126,
        'M. Porcius Cato The Younger',
        Age.LATE_REPUBLIC,
        22,
        2,
        1,
        6,
        11,
        4,
        [
            '1 Free Tribune per Turn',
            '+6 votes and double Knights on Law Proposals.'
        ],
        0,
        '-Caesar (4A)',
        ['4-1']
    ),
    new Cleopatra(),
    new Law(
        157,
        'Gabinian Law - 67 BC',
        Age.LATE_REPUBLIC,
        [
            'Hereafter, any non-rebel Commander currently at War may recruit Legions/Fleets from his Personal or Faction Treasury at the beginning of the Combat Phase. Commanders make this decision in HRAO ranking order.',
            'Playable only during a Pirate War (whether Inactive or Active).'
        ]
    ),
    new War(
        124,
        'Gladiator Revolt',
        Age.LATE_REPUBLIC,
        6,
        0,
        0,
        [6],
        [16],
        0,
        '73 - 71 BC',
        'Slave Revolts',
        [74, 75],
        [],
        [],
        true,
        false,
        [],
        false,
        ['If active roll 1d6 at the end of every Forum Phase to destroy a Tax Farmer until defeated.']
    ),
    new Graft(145, Age.LATE_REPUBLIC),
    new InfluencePeddling(150, Age.LATE_REPUBLIC),
    new War(
        121,
        'Invasion of Britannia',
        Age.LATE_REPUBLIC,
        4,
        2,
        0,
        [5],
        [17],
        10,
        '55 - 54 BC'
    ),
    new War(
        120,
        'Invasion of Germania',
        Age.LATE_REPUBLIC,
        6,
        0,
        0,
        [16],
        [18],
        10,
        '55 BC'
    ),
    new Law(
        160,
        'Julian Law - 90 BC',
        Age.LATE_REPUBLIC,
        [
            'Granting of citizenship to all Latin Colonies removes current Manpower Shortage(s) / No Recruitment(s) and improves Unrest Level by three. Playable only during the Social War.',
            'The player of this card must roll 1d6 for each of his Senators and each Senator loses Influence equal to the result.'
        ],
        ['Passing Laws Advanced Rule: The negative effects only apply to the player of the card, not necessarily the faction of the sponsor or co-sponsor. The law must pass for any of it (including negative effects) to occur. If Social War has already been defeated this card may be discarded in the Revolution Phase.']
    ),
    new Statesman(
        125,
        'C. Julius Caesar',
        Age.LATE_REPUBLIC,
        4,
        1,
        6,
        5,
        9,
        5,
        ['May convert 2 legions to allied veteran legions (instead of the normal 1) for each victory.'],
        2,
        '-Cato (22B)',
        ['22-2']
    ),
    new Statesman(
        132,
        'M. Licinius Crassus',
        Age.LATE_REPUBLIC,
        29,
        1,
        2,
        2,
        4,
        5,
        [
            'Doubles base Senatorial and Concession income but not Knight income.',
            'May be played event if 29B is already in play.'
        ],
        0,
        '-Pompey (30A)',
        ['30-1']
    ),
    new Statesman(
        133,
        'L. Licinius Lucullus',
        Age.LATE_REPUBLIC,
        29,
        1,
        5,
        3,
        10,
        3,
        [
            'Nullifies any losses taken as a result of a Disaster/Standoff. The War is considered Unprosecuted and Lucullus will automatically be recalled to Rome immediately after the next Senate Phase closes.',
            'May be played even if 29A is already in play.'
        ],
        0,
        '-Pompey (30A)',
        ['30-1']
    ),
    new Family(131, 'Licinius', Age.LATE_REPUBLIC, 29, 3, 2, 9, 3, true),
    new Law(
        159,
        'Manilian Law - 66 BC',
        Age.LATE_REPUBLIC,
        [
            'Hereafter, any victorious Commander may make War without Senate approval by keeping his Army and moving it to a current War card during the Revolution Phase (provided he has the necessary Fleet Support). If the War is Inactive, it becomes Active immediately.',
            'He is considered a Proconsul and may still be recalled. He may not attack the War during the Revolution Phase. If the war was already Unprosecuted it is still considered Unprosecuted until the attack is resolved.'
        ]
    ),
    new Family(128, 'Marius', Age.LATE_REPUBLIC, 27, 4, 2, 9, 4, true),
    new EnemyLeader(137, 'Mithridates VI', Age.LATE_REPUBLIC, 'Mithridatic Wars', 4, 12, 15, '120 - 63 BC'),
    new MurderOfATribune(151, Age.LATE_REPUBLIC),
    new Family(127, 'Octavius', Age.LATE_REPUBLIC, 26, 2, 3, 9, 4),
    new OpenBodyguard(152, Age.LATE_REPUBLIC),
    new War(
        117,
        'Parthian War',
        Age.LATE_REPUBLIC,
        12,
        2,
        0,
        [12],
        [18],
        35,
        '53 BC',
        '',
        [],
        [],
        [ProvinceName.CILICIA_ET_CYPRUS, ProvinceName.BITHYNIA, ProvinceName.SYRIA, ProvinceName.ASIA],
        true
    ),
    new Law(
        156,
        'Plautian-Papirian Law - 89 BC',
        Age.LATE_REPUBLIC,
        ['Granting of citizenship to all who apply, cuts enemy support of Social War. Reduce Strength of Social War by half and reduce Unrest Level by two. Playable only during Social War. The player of this card loses one Popularity from each of his Senators.'],
        ['Passing Laws Advanced Rule: The negative effects only apply to the player of the card, not necessarily the faction of the sponsor or co-sponsor. The law must pass for any of it (including negative effects) to occur. If Social War has already been defeated, this card may be discarded in the Revolution Phase.']
    ),
    new Statesman(
        135,
        'CN. Pompeius Magnus',
        Age.LATE_REPUBLIC,
        30,
        1,
        2,
        3,
        9,
        5,
        [
            'Doubles Popularity Gains / Losses.',
            'MIL determined before each battle.',
            'MIL is 2 when considering Minimum Force Requirements.'
        ],
        5,
        '-Crassus (29B)',
        ['29-2']
    ),
    new Family(134, 'Pompeius', Age.LATE_REPUBLIC, 30, 2, 2, 7, 2, true),
    new Proscription(144, Age.LATE_REPUBLIC),
    new Bequest(
        155,
        'Ptolemy Apion Bequest',
        Age.LATE_REPUBLIC,
        [
            'The Province of Creta et Cyrenaica is automatically established in the next Senate Phase.',
            'Discard if Creta et Cyrenaica already exists otherwise remove at the start of the next Forum Phase.'
        ]
    ),
    new SecretBodyguard(146, Age.LATE_REPUBLIC),
    new War(
        123,
        'Sertorian Revolt',
        Age.LATE_REPUBLIC,
        8,
        2,
        0,
        [14],
        [13],
        0,
        '77 - 71 BC',
        'Spanish Revolts',
        [72, 73],
        [],
        [ProvinceName.HISPANIA_CITERIOR, ProvinceName.HISPANIA_ULTERIOR],
        false,
        false,
        [ProvinceName.HISPANIA_CITERIOR, ProvinceName.HISPANIA_ULTERIOR],
        true
    ),
    new War(
        119,
        'Social War',
        Age.LATE_REPUBLIC,
        10,
        0,
        0,
        [13],
        [16],
        15,
        '90 - 88 BC',
        '',
        [],
        [],
        [],
        true,
        false,
        [],
        false,
        [
            'Activates all Inactive Wars and Revolts that are part of a Matching War Set.',
            'Does not increase the Strength of any Matching Wars.'
        ]
    ),
    new EnemyLeader(
        136,
        'Spartacus',
        Age.LATE_REPUBLIC,
        'Slave Revolts',
        5,
        11,
        14,
        '? - 71 BC',
        ['If matched with Gladiator Revolt roll 1d6 at the end of every Forum Phase to destroy a Tax Farmer until defeated.']
    ),
    new Tribune(140, Age.LATE_REPUBLIC),
    new Tribune(143, Age.LATE_REPUBLIC),
    new Tribune(142, Age.LATE_REPUBLIC),
    new Tribune(141, Age.LATE_REPUBLIC),
    new Statesman(
        130,
        'M. Tullius Cicero',
        Age.LATE_REPUBLIC,
        28,
        1,
        1,
        6,
        10,
        3,
        [
            '1 Free Tribune per Year',
            '+2 to Trial dice roll if Prosecutor or Advocate'
        ],
        1
    ),
    new Family(129, 'Tullius', Age.LATE_REPUBLIC, 28, 2, 3, 7, 3, true),
    new Law(
        158,
        'Vatinian Law - 59 BC',
        Age.LATE_REPUBLIC,
        ['Hereafter, an Aligned Senator may govern one or more Provinces through a Legate while remaining in Rome in some other office or commanding an office in the field. All officials are now eligible to become Governors, regardless if they are in Rome, hold a Major Office or already control a Province via Legate (proxy). Once elected to be a Governor, a Senator in Rome must choose to either go to the Province until his Term is up (or he is recalled) or govern the Province through a Legate.'],
        ['Additional text: Provincial Wars and Rebel Governor Advanced Rule. (see rules - 1.13.1)']
    ),
    new EnemyLeader(
        138,
        'Vercingetorix',
        Age.LATE_REPUBLIC,
        'Gallic Wars',
        6,
        14,
        18,
        '? - 46 BC'
    )
];