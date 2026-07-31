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
