
function saveGame(){

localStorage.setItem(

"devilHunter",

JSON.stringify({

player:Player,

game:Game

})

);

}

function loadGame(){

const data=localStorage.getItem("devilHunter");

if(!data)return;

const save=JSON.parse(data);

Object.assign(Player,save.player);

Object.assign(Game,save.game);

}
