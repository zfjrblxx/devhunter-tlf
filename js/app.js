window.addEventListener(

"DOMContentLoaded",

()=>{

document.getElementById(

"app"

).innerHTML=`

<div class="panel fade-up"

style="

width:520px;

padding:40px;

text-align:center;

">

<h1

class="logo"

style="

font-size:46px;

margin-bottom:10px;

">

DEVIL HUNTER

</h1>

<p

style="

color:var(--gold);

margin-bottom:30px;

letter-spacing:4px;

">

THE LAST FLOOR

</p>

<button class="btn">

START

</button>

</div>

`;

});


window.addEventListener(

"DOMContentLoaded",

()=>{

Router.register(

"menu",

renderMenu

);

Router.go(

"menu"

);

});
