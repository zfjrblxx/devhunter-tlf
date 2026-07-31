

function renderMenu() {

document.getElementById("app").innerHTML = `

<div class="menu">

    <div class="logo">

        <h1>DEVIL HUNTER</h1>

        <h2>THE LAST FLOOR</h2>

    </div>

    <div class="menu-buttons">

        <button class="menu-btn" id="newGame">
            New Game
        </button>

        <button class="menu-btn" id="continueGame">
            Continue
        </button>

        <button class="menu-btn" id="settings">
            Settings
        </button>

        <button class="menu-btn" id="credits">
            Credits
        </button>

    </div>

    <div class="version">
        Alpha v0.1
    </div>

</div>

`;

addMenuEvents();

}

function addMenuEvents(){

document.getElementById("newGame").onclick = () => {

    startStory();

};

document.getElementById("continueGame").onclick=()=>{

loadGame();

alert("Save Loaded");

}

document.getElementById("settings").onclick=()=>{

alert("Settings");

}

document.getElementById("credits").onclick=()=>{

alert("Created by You");

}

}
