// Initialise div choice doc selectors
let stratagemChoice = document.querySelector("#stratagems-choice");
let primaryChoice = document.querySelector("#primary-choice");
let secondaryChoice = document.querySelector("#secondary-choice");
let grenadeChoice = document.querySelector("#grenade-choice");

// Initialise doc selector for specific randomisation.
let specificStratagems = document.querySelector("#specific-stratagems");
let stratagemNo = document.querySelector("#stratagem-no");
specificStratagems.style.display = 'none';

// Initialise checkboxes
let superCitizenTick = document.querySelector("#super-citizen");
let steeledVeteransTick = document.querySelector("#steeled-veterans");
let cuttingEdgeTick = document.querySelector("#cutting-edge");
let democraticDetonationTick = document.querySelector("#democratic-detonation");
let polarPatriotsTick = document.querySelector("#polar-patriots");
let viperCommandosTick = document.querySelector("#viper-commandos");
let freedomsFlameTick = document.querySelector("#freedoms-flame");
let chemicalAgentsTick = document.querySelector("#chemical-agents");
let truthEnforcersTick = document.querySelector("#truth-enforcers");

// Add event listeners to all of them.
superCitizenTick.addEventListener('change', superCitizenList);
steeledVeteransTick.addEventListener('change', steeledVeteransList);
cuttingEdgeTick.addEventListener('change', cuttingEdgeList);
democraticDetonationTick.addEventListener('change', democraticDetonationList);
polarPatriotsTick.addEventListener('change', polarPatriotsList);
viperCommandosTick.addEventListener('change', viperCommandosList);
freedomsFlameTick.addEventListener('change', freedomsFlameList);
chemicalAgentsTick.addEventListener('change', chemicalAgentsList);
truthEnforcersTick.addEventListener('change', truthEnforcersList);

// arrays.
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

// Helldivers Mobilise Warbonds automatically in the arrays
// these arrays will be used to pull from the pool.
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

// initialise randomised stratagem set.
let randStratagems = new Set([]);
let randStratArray = [];

// initialise string for text content.
let stratagemText = "";
let primaryText = "";
let secondaryText = "";
let grenadeText = "";

// For those who have Super Citizen; Primary
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

function randomiseAll() {
    console.log("randomising...");
    randomiseStratagems();

    // reveal specific stratagem buttons.
    if (specificStratagems.style.display == 'none') {
        specificStratagems.style.display = 'block';
    }

    // choose and print primary.
    primaryText = "";
    primaryText = `<p>${primary[Math.floor(Math.random() * primary.length)]}</p>`;
    primaryChoice.innerHTML = primaryText;

    // choose and print secondary.
    secondaryText = "";
    secondaryText = `<p>${secondary[Math.floor(Math.random() * secondary.length)]}</p>`;
    secondaryChoice.innerHTML = secondaryText;

    // choose and print secondary.
    grenadeText = "";
    grenadeText = `<p>${grenade[Math.floor(Math.random() * grenade.length)]}</p>`;
    grenadeChoice.innerHTML = grenadeText;
}

function randomiseStratagems() {
    // if the randomise stratagems are still there, remove all stratagems
    if (randStratagems.size > 0) {
        stratagemText = "";
        randStratagems.clear();
        randStratArray = [];
    }

    // puts randomised stratagems to an array.
    while (randStratagems.size != 4) {
        let randomised = stratagems[Math.floor(Math.random() * stratagems.length)];
        randStratagems.add(randomised);
    }

    for (let text of randStratagems) {
        randStratArray.push(text);
    }
    // print stratagems.
    printStratagems();
}

function specificStrat() {
    if (stratagemNo.value != 5) {
        let index = stratagemNo.value - 1;
        let randomised = stratagems[Math.floor(Math.random() * stratagems.length)];
        // if previous randomised is already in the set, randomise it once again.
        while (randStratagems.has(randomised)) {
            randomised = stratagems[Math.floor(Math.random() * stratagems.length)];
        }
        randStratArray[index] = randomised;
        
        // update set
        randStratagems.clear();
        for (let text of randStratArray) {
            randStratagems.add(text);
        }

        printStratagems();
    }
    else {
        randomiseStratagems();
    }
}

function printStratagems() {
    stratagemText = "";
    for (let text of randStratArray) {
        stratagemText += `
        <p>${text}</p>
        `;
    }
    stratagemChoice.innerHTML = stratagemText;
}

function superCitizenList() {
    if (superCitizenTick.checked) {
        console.log("adding Super Citizen \"Warbond\".");
        primary.push(superCitizen);
    }
    else {
        console.log("removing Super Citizen \"Warbond\".");
        let scIndex = primary.indexOf(superCitizen);
        primary.splice(scIndex, 1);
    }
}

function steeledVeteransList() {
    if (steeledVeteransTick.checked) {
        console.log("adding Steeled Veterans Warbond.");
        for (i = 0; i < steeledVeterans[0].length; i++) {
            primary.push(steeledVeterans[0][i]);
        }
        secondary.push(steeledVeterans[1]);
        grenade.push(steeledVeterans[2]);
    }
    else {
        console.log("removing Steeled Veterans Warbond.");
        let svIndexPrim = primary.indexOf(steeledVeterans[0][0]);
        primary.splice(svIndexPrim, 3);
        let svIndexSec = secondary.indexOf(steeledVeterans[1]);
        secondary.splice(svIndexSec, 1);
        let svIndexGren = grenade.indexOf(steeledVeterans[2]);
        grenade.splice(svIndexGren, 1);
    }
}

function cuttingEdgeList() {
    if (cuttingEdgeTick.checked) {
        console.log("adding Cutting Edge Warbond.");
        for (i = 0; i < cuttingEdge[0].length; i++) {
            primary.push(cuttingEdge[0][i]);
        }
        secondary.push(cuttingEdge[1]);
        grenade.push(cuttingEdge[2]);
    }
    else {
        console.log("removing Cutting Edge Warbond.");
        let ceIndexPrim = primary.indexOf(cuttingEdge[0][0]);
        primary.splice(ceIndexPrim, 3);
        let ceIndexSec = secondary.indexOf(cuttingEdge[1]);
        secondary.splice(ceIndexSec, 1);
        let ceIndexGren = grenade.indexOf(cuttingEdge[2]);
        grenade.splice(ceIndexGren, 1);
    }
}

function democraticDetonationList() {
    if (democraticDetonationTick.checked) {
        console.log("adding Democratic Detonation Warbond.");
        for (i = 0; i < democraticDetonation[0].length; i++) {
            primary.push(democraticDetonation[0][i]);
        }
        secondary.push(democraticDetonation[1]);
        grenade.push(democraticDetonation[2]);
    }
    else {
        console.log("removing Democratic Detonation Warbond.");
        let ddIndexPrim = primary.indexOf(democraticDetonation[0][0]);
        primary.splice(ddIndexPrim, 3);
        let ddIndexSec = secondary.indexOf(democraticDetonation[1]);
        secondary.splice(ddIndexSec, 1);
        let ddIndexGren = grenade.indexOf(democraticDetonation[2]);
        grenade.splice(ddIndexGren, 1);
    }
}

function polarPatriotsList() {
    console.log("Polar Patriots changed.");
}

function viperCommandosList() {
    console.log("Viper Commandos changed.");
}

function freedomsFlameList() {

}

function chemicalAgentsList() {

}

function truthEnforcersList() {

}