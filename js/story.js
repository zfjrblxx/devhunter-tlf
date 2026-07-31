const introText = [

"Year 2089...",
"",
"Humanity thought the Devil War had ended.",
"",
"They were wrong.",
"",
"Thousands of Hunters entered the Abyss.",
"",
"None returned.",
"",
"Now...",
"",
"Only one Hunter remains.",
"",
"You."

];

let currentLine = 0;

function startStory(){

document.getElementById("app").innerHTML=`

<div class="story-screen">

<div id="storyText"></div>

<button id="nextStory" class="hidden">

Continue

</button>

</div>

`;

typeNextLine();

}




function typeNextLine(){

if(currentLine>=introText.length){

document.getElementById("nextStory")
.classList.remove("hidden");

return;

}

const text=document.getElementById("storyText");

const p=document.createElement("p");

text.appendChild(p);

let i=0;

const timer=setInterval(()=>{

p.textContent+=introText[currentLine][i]||"";

i++;

if(i>introText[currentLine].length){

clearInterval(timer);

currentLine++;

setTimeout(typeNextLine,400);

}

},25);

}
