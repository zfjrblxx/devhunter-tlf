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

function typeLine(){

    if(storyIndex >= introLines.length){

        const btn =
        document.getElementById("continueBtn");

        btn.classList.remove("hidden");

        btn.onclick = () => {

            enterTown();

        };

        return;

    }

    const box =
    document.getElementById("storyText");

    const p =
    document.createElement("p");

    box.appendChild(p);

    let i = 0;

    const line = introLines[storyIndex];

    const timer = setInterval(()=>{

        if(i < line.length){

            p.textContent += line[i];

            i++;

        }else{

            clearInterval(timer);

            storyIndex++;

            setTimeout(typeLine,350);

        }

    },30);

}
