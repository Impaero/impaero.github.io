const landingPage1 = `
<div class="warning">
<img src="../home-assets/images/dragon-solid-white.png" height="50px" width="60px">
<p>
THIS DATABASE IS ONLY FOR THE RIFT WATCH’S EYES ONLY.<br>
IF UNAUTHORISED, TURN BACK. ONLY INSANITY AWAITS ON YOU.
</p>
<button id="warning-button">PROCEED</button>
</div>
`;

const landingPage2 = ``;
let landingPage2Exist = false;

const body = document.querySelector("#body");

body.innerHTML = landingPage1;