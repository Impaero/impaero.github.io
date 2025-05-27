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

const landingPage2 = `<div class="homepage">
    <div class="page-header">
        
    </div>
</div>`;
let landingPage2Exist = false;

let body = document.querySelector("#body");

body.innerHTML = landingPage1;

// sets warning page so that 
function setWarningTrue() {
    document.cookie = "warning=true;";
}

function checkWarningTrue() {

}

function warningReceived() {
    showDatabase(0); 
}

function showDatabase(id) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        const db = JSON.parse(this.responseText);
        body.innerHTML = db.manifestDatabase[id].description.replaceAll("\n","<br />");
    };
    xmlhttp.open("GET", "database.json");
    xmlhttp.send();
}
