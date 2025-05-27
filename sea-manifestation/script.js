// Declaring "showcase" as global so any of the functions can access it.
let showcase = undefined;

// Landing Page - Warning
const landingPage1 = `
<div class="warning">
<img src="../home-assets/images/dragon-solid-white.png" height="50px" width="60px">
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
            <div class="header-container">
                <div class="rift-watch-icon">
                    <img src="../home-assets/images/dragon-solid-white.png" height="60px" width="60px" float="left">   
                </div>
                <div class="rift-watch-top-text">
                    <h1>RIFT WATCH DATABASE</h1>
                </div>
            </div>
            <div class="main-body">
                <div class="sidebar">
                    <button class="sidebar-b" onclick="sidebarFunction('wawa')">TESTING BUTTON</button>
                </div>
                <div class="showcase-container" id="showcase">
                    <p>testing text</p>
                </div>
        </div>
    </div>`;

// Set landing page to warning.
let body = document.querySelector("#body");
body.innerHTML = landingPage1;

// sets warning page so that the user does not need to click on it everytime they refresh the page.
function setWarningTrue() {
    document.cookie = "warning=true;";
}

function checkWarningTrue() {

}

// swap from warning page to main page
function warningReceived() {
    body.innerHTML = landingPage2;
    showcase = document.querySelector("#showcase");
    // return true;
}

// Dictates what each button on the sidebar does. Typically shows the database.
function sidebarFunction(functionName) {
    if (functionName == "wawa") { // test function.
        showDatabase(0, showcase);
    }
}

// Show information about certain rifts. Currently only Charybdis for now.
function showRiftInfo(riftName) {

}

// Show database content.
function showDatabase(id, showcase) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        const db = JSON.parse(this.responseText);
        showcase.innerHTML = `
        <div class="showcase-text"> 
            <img src="${db.manifestDatabase[id].image}" height="300px" class="center">
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
                    <td>NOTABLE FEATUERS</td>
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
