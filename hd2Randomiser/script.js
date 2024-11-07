let stratagemChoice = document.querySelector(".stratagems-choice");

const stratagems = [ // updated Nov 7, 2024
    "Eagle Strafing Run",
    "Eagle Airstrike",
    "Eagle Cluster Bomb",
    "Eagle Napalm Strike",
    "Eagle Smoke Strike",
    "Eagle 110MM Rocket Pods",
    "Eagle 500KG Bomb",
    "Orbital Gatling Barrage",
    "Orbital Airburst Strike",
    "Orbital 120MM HE Barrage",
    "Orbital 380MM HE Barrage",
    "Orbital Walking Barrage",
    "Orbital Laser",
    "Orbital Railcannon Strike",
    "Orbital Precision Strike",
    "Orbital Gas Strike",
    "Orbital EMS Strike",
    "Orbital Smoke Strike",
    "Orbital Napalm Barrage",
    "LIFT-850 Jump Pack",
    "B-1 Supply Pack",
    "SH-20 Ballistic Shield Backpack",
    "SH-32 Shield Generator Pack",
    "AX/AR-23 \"Guard Dog\"",
    "AX/LAS-5 \"Guard Dog\" Rover",
    "AX/TX-13 \"Guard Dog\" Dog Breath",
    "MG-43 Machine Gun",
    "APW-1 Anti-Materiel Rifle",
    "M-105 Stalwart",
    "EAT-17 Expendable Anti-tank",
    "MLS-4X Commando",
    "GR-8 Recoiless Rifle",
    "FLAM-40 Flamethrower",
    "AC-8 Autocannon",
    "MG-206 Heavy Machine Gun",
    "RS-422 Railgun",
    "FAF-14 Spear Launcher",
    "GL-21 Grenade Launcher",
    "LAS-98 Laser Cannon",
    "ARC-3 Arc Thrower",
    "LAS-99 Quasar Cannon",
    "RL-77 Airburst Rocket Launcher",
    "EXO-45 Patriot Exosuit",
    "EXO-49 Emancipator Exosuit",
    "E/MG-101 HMG Emplacement",
    "FX-12 Shield Generator Relay",
    "A/ARC-3 Tesla Tower",
    "MD-6 Anti-Personnel Minefield",
    "MD-I4 Incendiary Mines",
    "MD-17 Anti-Tank Mines",
    "A/MG-43 Machine Gun Sentry",
    "A/G-16 Gatling Sentry",
    "A/M-12 Mortar Sentry",
    "A/AC-8 Autocannon Sentry",
    "A/MLS-4X Rocket Sentry",
    "A/M-23 EMS Mortar Sentry",
];

// Helldivers Mobilise automatically in the arrays
// these will be used 
let primary = [
    "AR-23 Liberator",
    "SG-8 Punisher",
    "R-63 Diligence",
    "SG-225 Breaker",
    "LAS-5 Scythe",
    "AR-23P Liberator Penetrator",
    "R-253CS Diligence Counter Sniper",
    "SG-8S Slugger",
    "SG-225SP Breaker Spray&Pray",
    "PLAS-1 Scorcher",
    "R-2124 Constitution"
];
let secondary = [
    "P-2 Peacemaker",
    "P-19 Redeemer",
];
let grenade = [
    "G-12 High Explosive",
    "G-6 Frag",
    "G-16 Impact",
    "G-3 Smoke"
];

// For those who have Super Citizen
const superCitizen = "MP-98 Knight SMG";

// Steeled Veterans - Primary/Secondary/Grenade
const steeledVeterans = [
    [
        "AR-23C Liberator Concussive",
        "SG-225IE Breaker Incendiary",
        "JAR-5 Dominator"
    ],
    "P-4 Senator",
    "G-10 Incendiary"
];

// Cutting Edge
const cuttingEdge = [
    [
        "LAS-16 Sickle",
        "SG-8P Punisher Plasma",

    ],
    "LAS-7 Dagger",
    "G-23 Stun"
]

// Democratic Detonation - Primary/Secondary/Grenade
const democraticDetonation = [
    [
        "BR-14 Abjudicator",
        "R-36 Eruptor",
        "CB-9 Exploding Crossbow"
    ],
    "GP-31 Grenade Pistol",
    "G-123 Thermite"
];

// Polar Patriots - Primary/Secondary/Grenade
const polarPatriots = [
    [
        "AR-21 Tenderizer",
        "SMG-72 Pummeler",
        "PLAS-101 Purifier"
    ],
    "P-113 Verdict",
    "G-13 Incendiary Impact"
]


// Viper Commandos - Primary/Secondary/Grenade
const viperCommandos = [
    "AR-23A Liberator Carbine",
    "SG-22 Bushwhacker",
    "K-2 Throwing Knife"
]

// Freedom's Flame - Primary/Secondary
const freedomsFlame = [
    [
        "SG-451 Cookout",
        "FLAM-66 Torcher"
    ],
    "P-72 Crisper"
]

// Chemical Agents - Stratagems/Secondary/Grenade
const chemicalAgents = [
    [
        "TX-41 Steriliser",
        "AX/TX-13 \"Guard Dog\" Dog Breath",
    ],
    "P-11 Stim Pistol",
    "G-4 Gas"
]

// Truth Enforcers - Primary/Secondary
const truthEnforcers = [
    [
        "SG-20 Halt",
        "SMG-32 Reprimand"
    ],
    "PLAS-15 Loyalist"
];
