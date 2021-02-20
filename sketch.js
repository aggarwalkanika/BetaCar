var ball,database,position, player, form, allPlayers;
var Distance = 0
var GameState = 0
var PlayerCount= 0

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game = new Game
    game.getState()
    game.start()
}
function draw(){
    background("white");
    if(PlayerCount === 4){
        game.update(1)
    }
    if(GameState === 1){
        clear()
        game.play()
    }
}

