// Declaring "showcase" as global so any of the functions can access it.
let showcase = undefined;
let br1 = undefined;
let b1 = undefined;
let b2 = undefined;
let b3 = undefined;
let b4 = undefined;
let b5 = undefined;
let b6 = undefined;
let b7 = undefined;

// Landing Page - Warning
const landingPage1 = `
<div class="warning crt-fg">
<img src="images/rw-logo.png" height="50px" width="50px">
<p>
THIS DATABASE IS ONLY FOR THE RIFT WATCH’S EYES ONLY.<br>
IF UNAUTHORISED, TURN BACK. ONLY INSANITY AWAITS ON YOU.
</p>
<button id="warning-button" onclick="warningReceived()">PROCEED</button>
</div>
`;

// Main Page.
const landingPage2 = `
    <div id="main-page">
            <div class="header-container crt-fg">
                <div class="rift-watch-icon">
                    <img src="images/rw-logo.png" height="60px" width="60px" float="left">   
                </div>
                <div class="rift-watch-top-text">
                    <h1>RIFT WATCH DATABASE</h1>
                </div>
            </div>
            <div class="main-body">
                <div class="sidebar crt-fg">
                    <button class="sidebar-b" id="br1" onclick="sidebarFunction('C-621')">C-621: THE CHARYBDIS RIFT</button>
                    <button class="sidebar-b" id="b1" onclick="sidebarFunction('C-E-01')">C-E-01: CONFIDENCE</button>
                    <button class="sidebar-b" id="b2" onclick="sidebarFunction('C-M-05')">C-M-05: LIVING WHALEFALL</button>
                    <button class="sidebar-b" id="b3" onclick="sidebarFunction('C-B-07')">C-B-07: SCOPOPHOBIA</button>
                    <button class="sidebar-b" id="b4" onclick="sidebarFunction('C-B-08')">C-B-08: IMPULSIVITY</button>
                    <button class="sidebar-b" id="b5" onclick="sidebarFunction('C-M-18')">C-M-18: HERD MENTALITY</button>
                    <button class="sidebar-b" id="b6" onclick="sidebarFunction('C-E-21')">C-E-21: CALM</button>
                    <button class="sidebar-b" id="b7" onclick="sidebarFunction('C-A-00')">C-A-00: THE LEVIATHAN</button>
                </div>
                <div class="showcase-container crt-fg" id="showcase">
                    <div class="showcase-text middle">
                        <h1>PLEASE SELECT AN ENTRY TO SHOW.</h1>
                    </div>
                </div>
        </div>
    </div>`;

// Set landing page to warning.
let body = document.querySelector("#body");

// sets warning page so that the user does not need to click on it everytime they refresh the page.
function setWarningTrue() {
    document.cookie = "warning=true";
}

function checkWarningTrue() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split('=');
    if (ca[1] == "true") {
        showMainPage();
    }
    else {
        body.innerHTML = landingPage1;
    }
}

// swap from warning page to main page
function warningReceived() {
    showMainPage();
    setWarningTrue();
}

function showMainPage() {
    body.innerHTML = landingPage2;
    showcase = document.querySelector("#showcase"); // allows showcase to be modified.
    // allow buttons to be modified (in order for the buttons to be "disabled" upon
    // showing the respective database.
    br1 = document.querySelector("br1");
    b1 = document.querySelector("#b1");
    b2 = document.querySelector("#b2");
    b3 = document.querySelector("#b3");
    b4 = document.querySelector("#b4");
    b5 = document.querySelector("#b5");
    b6 = document.querySelector("#b6");
    b7 = document.querySelector("#b7");
}

// Dictates what each button on the sidebar does. Typically shows the database.
function sidebarFunction(functionName) {
    switch (functionName) {
        case "C-621":
            showRiftInfo(0, showcase);
            break;
        case "C-E-01":
            showDatabase(0, showcase);
            break;
        case "C-M-05":
            showDatabase(1, showcase);
            break;
        case "C-B-07":
            showDatabase(2, showcase);
            break;
        case "C-B-08":
            showDatabase(3, showcase);
            break;
        case "C-M-18":
            showDatabase(4, showcase);
            break;
        case "C-E-21":
            showDatabase(5, showcase);
            break;
        case "C-A-00":
            showDatabase(6, showcase);
            break;
    }
}

// Show information about certain rifts. Currently only Charybdis for now.
function showRiftInfo(id, showcase) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        const db = JSON.parse(this.responseText);
        showcase.innerHTML = `
        <div class="showcase-text"> 
            <h1>RIFT</h1>
            <img src="${db.riftDatabase[id].image}" height="400px" class="center">
            <h2>CODE: ${db.riftDatabase[id].rID}</h2>
            <h2>NAME: ${db.riftDatabase[id].name}</h2>
            <h2>GENERAL LOCATION: ${db.riftDatabase[id].location}</h2>
            <h2>THREAT LEVEL: ${db.riftDatabase[id].threat}</h2>
            <p>${db.riftDatabase[id].description.replaceAll("\n","<br />")}</p>
        </div>
        `;
    };
    xmlhttp.open("GET", "database.json");
    xmlhttp.send();
}

// Show database content.
function showDatabase(id, showcase) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        const db = JSON.parse(this.responseText);
        showcase.innerHTML = `
        <div class="showcase-text"> 
            <h1>MANIFESTATION</h1>
            <img src="${db.manifestDatabase[id].image}" height="400px" class="center">
            <table class="basic-info">
                <tr>
                    <td>CODE</td>
                    <td>${db.manifestDatabase[id].mID}</td>
                </tr>
                <tr>
                    <td>NAME</td>
                    <td>${db.manifestDatabase[id].name}</td>
                </tr>
                <tr>
                    <td>LENGTH</td>
                    <td>${db.manifestDatabase[id].length}</td>
                </tr>
                <tr>
                    <td>LAYER</td>
                    <td>${db.manifestDatabase[id].layer}</td>
                </tr>
                <tr>
                    <td>NOTABLE FEATURES</td>
                    <td>${db.manifestDatabase[id].notableFeatures}</td>
                </tr>
            </table>
            <p>${db.manifestDatabase[id].description.replaceAll("\n","<br />")}</p>
        </div>
        `;
    };
    xmlhttp.open("GET", "database.json");
    xmlhttp.send();
}


checkWarningTrue();