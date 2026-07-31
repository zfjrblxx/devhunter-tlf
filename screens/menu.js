function renderMenu(){

document.getElementById("app").innerHTML = `

<div class="menu panel fade-up">

    <div class="logo-area">

        <h1 class="logo">

            DEVIL HUNTER

        </h1>

        <p class="subtitle">

            THE LAST FLOOR

        </p>

        <span class="tagline">

            The Abyss Never Forgives

        </span>

    </div>

    <div class="menu-list">

        <button class="btn" id="newGame">

            New Game

        </button>

        <button class="btn" id="continueGame">

            Continue

        </button>

        <button class="btn" id="settings">

            Settings

        </button>

        <button class="btn" id="credits">

            Credits

        </button>

    </div>

    <div class="version">

        Alpha 0.1

    </div>

</div>

`;

document
.getElementById("newGame")
.onclick = ()=>{

    Router.go("story");

};

document
.getElementById("continueGame")
.onclick = ()=>{

    alert("Coming Soon");

};

document
.getElementById("settings")
.onclick = ()=>{

    alert("Coming Soon");

};

document
.getElementById("credits")
.onclick = ()=>{

    alert("Devil Hunter : The Last Floor");

};

}
