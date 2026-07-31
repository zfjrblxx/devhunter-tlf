const introLines = [

    "Year 2089...",
    "",
    "The Devil War was believed to be over.",
    "",
    "But the Abyss has opened once again.",
    "",
    "Thousands of Devil Hunters entered...",
    "",
    "None returned.",
    "",
    "Only one Hunter remains.",
    "",
    "You."

];

let storyIndex = 0;

function startStory(){

    storyIndex = 0;

    document.getElementById("app").innerHTML = `

        <div class="story">

            <div id="storyText"></div>

            <button
                id="continueBtn"
                class="continue hidden">

                Continue

            </button>

        </div>

    `;

    typeLine();

}
